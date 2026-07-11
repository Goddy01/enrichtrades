export type FormatCountOptions = {
  decimals?: number;
  prefix?: string;
  suffix?: string;
  comma?: boolean;
};

export function formatCount(value: number, options: FormatCountOptions = {}): string {
  const { decimals = 0, prefix = '', suffix = '', comma = false } = options;

  let formatted: string;
  if (decimals > 0) {
    formatted = value.toFixed(decimals);
  } else if (comma) {
    formatted = Math.round(value).toLocaleString('en-US');
  } else {
    formatted = String(Math.round(value));
  }

  return `${prefix}${formatted}${suffix}`;
}

export type ParsedPanelValue = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  comma?: boolean;
};

export function parsePanelValue(value: string): ParsedPanelValue | null {
  const percentMatch = value.match(/^(\+)?(\d+(?:\.\d+)?)%$/);
  if (percentMatch) {
    return {
      prefix: percentMatch[1] || undefined,
      value: parseFloat(percentMatch[2]),
      suffix: '%',
    };
  }

  const multiplierMatch = value.match(/^(\d+(?:\.\d+)?)x$/i);
  if (multiplierMatch) {
    return { value: parseFloat(multiplierMatch[1]), suffix: 'x' };
  }

  return null;
}
