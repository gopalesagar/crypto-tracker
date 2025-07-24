import { Coin } from '@/types/coin';
import Image from 'next/image';

export default function CryptoTable({ coins }: { coins: Coin[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Coin</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => (
            <tr key={coin.id} className="border-t">
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <Image src={coin.image} alt={coin.name} width={24} height={24} className="w-6 h-6"/>
              </td>
              <td className="px-4 py-2">${coin.current_price.toLocaleString()}</td>
              <td
                className={`px-4 py-2 ${
                  coin.price_change_percentage_24h >= 0
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
