import CryptoTable from '@/components/crypto/CryptoTable';
import { fetchCryptoList } from '@/lib/api';
import { Coin } from '@/types/coin';

export default async function CryptoPage() {
  const data: Coin[] = await fetchCryptoList();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📈 Crypto Prices</h1>
      <CryptoTable coins={data} />
    </div>
  );
}
