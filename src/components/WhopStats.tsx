import CountUp from './CountUp';
import { STATS } from '../data/content';

type WhopStatsProps = {
  variant: 'reviews-members' | 'reviews-ratings' | 'services' | 'products';
};

export default function WhopStats({ variant }: WhopStatsProps) {
  if (variant === 'reviews-members') {
    return (
      <>
        <CountUp value={STATS.members.value} suffix="+" comma /> members who are winning
      </>
    );
  }

  if (variant === 'reviews-ratings') {
    return (
      <>
        <CountUp value={STATS.whopRating.value} decimals={STATS.whopRating.decimals} /> on Whop ·{' '}
        <CountUp value={STATS.reviews.value} /> ratings
      </>
    );
  }

  if (variant === 'services') {
    return (
      <>
        <CountUp value={STATS.whopRating.value} decimals={STATS.whopRating.decimals} /> on Whop ·{' '}
        <CountUp value={STATS.reviews.value} /> reviews ·{' '}
        <CountUp value={STATS.members.value} suffix="+" comma /> members
      </>
    );
  }

  return (
    <>
      <CountUp value={STATS.whopRating.value} decimals={STATS.whopRating.decimals} /> on Whop ·{' '}
      <CountUp value={STATS.reviews.value} /> reviews · Use code &quot;levels&quot; for a discount
    </>
  );
}
