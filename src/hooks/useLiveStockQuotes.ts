import { useEffect, useState } from 'react';
import { TICKER_SYMBOLS } from '../data/tickerSymbols';

export type StockQuote = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
};

type YahooSparkEntry = {
  symbol: string;
  close?: number[];
  previousClose?: number;
  chartPreviousClose?: number;
};

type YahooSparkResponse = Record<string, YahooSparkEntry>;

const REFRESH_MS = 60_000;

function parseQuote(symbol: string, entry: YahooSparkEntry): StockQuote | null {
  const closes = entry.close;
  if (!closes?.length) return null;

  const price = closes[closes.length - 1];
  const previousClose = entry.previousClose ?? entry.chartPreviousClose;
  if (previousClose == null || !Number.isFinite(price)) return null;

  const change = price - previousClose;
  const changePercent = previousClose === 0 ? 0 : (change / previousClose) * 100;

  return {
    symbol,
    price,
    change,
    changePercent,
  };
}

async function fetchQuotes(symbols: readonly string[]): Promise<StockQuote[]> {
  const query = symbols.join(',');
  const endpoint = import.meta.env.DEV
    ? `/api/stock-quotes?symbols=${encodeURIComponent(query)}`
    : `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Quote request failed (${response.status})`);
  }

  const data = (await response.json()) as YahooSparkResponse;

  return symbols
    .map((symbol) => {
      const entry = data[symbol];
      return entry ? parseQuote(symbol, entry) : null;
    })
    .filter((quote): quote is StockQuote => quote !== null);
}

export default function useLiveStockQuotes() {
  const [quotes, setQuotes] = useState<StockQuote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const nextQuotes = await fetchQuotes(TICKER_SYMBOLS);
        if (isMounted) {
          setQuotes((current) =>
            nextQuotes.length === 0
              ? current
              : nextQuotes.map((quote) => {
                  const existing = current.find((item) => item.symbol === quote.symbol);
                  if (!existing) return quote;

                  const priceDelta = Math.abs(existing.price - quote.price);
                  const changeDelta = Math.abs(existing.change - quote.change);
                  if (priceDelta < 0.005 && changeDelta < 0.005) {
                    return existing;
                  }

                  return quote;
                }),
          );
        }
      } catch {
        if (isMounted) {
          setQuotes([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    load();
    const intervalId = window.setInterval(load, REFRESH_MS);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return { quotes, isLoading };
}
