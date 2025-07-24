import { fetchCoinById } from '@/lib/api'; // You'll create this if not already
import Image from 'next/image';

type Props = {
  params: { id: string }; // 👈 this comes from [id] in the URL
};

export default async function CoinDetailsPage({ params }: Props) {
  const coin = await fetchCoinById(params.id);
  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        <Image
          src={coin.image.large}
          alt={coin.name}
          width={60}
          height={60}
        />
        <h1 className="text-3xl font-bold">{coin.name}</h1>
      </div>

      <p className="mt-4 text-lg">
        Symbol: <span className="font-semibold">{coin.symbol.toUpperCase()}</span>
      </p>
      <p className="text-lg">
        Current Price: ${coin.market_data.current_price.usd}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Market Cap Rank: #{coin.market_cap_rank}
      </p>
    </div>
  );
}