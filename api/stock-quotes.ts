import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const symbols = req.query.symbols;
  if (typeof symbols !== 'string' || !symbols.trim()) {
    return res.status(400).json({ error: 'Missing symbols query param' });
  }

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${encodeURIComponent(symbols)}`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Upstream quote request failed' });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 'public, max-age=45, stale-while-revalidate=15');
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: 'Failed to fetch stock quotes' });
  }
}
