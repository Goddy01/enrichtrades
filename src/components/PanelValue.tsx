import CountUp from './CountUp';
import { parsePanelValue } from '../lib/formatStat';

type PanelValueProps = {
  value: string;
  className?: string;
};

export default function PanelValue({ value, className = '' }: PanelValueProps) {
  const parsed = parsePanelValue(value);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <CountUp
      value={parsed.value}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      decimals={parsed.decimals}
      comma={parsed.comma}
      className={className}
    />
  );
}
