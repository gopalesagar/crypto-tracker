const BASE_URL = process.env.NEXT_PUBLIC_COIN_API;

export async function fetchCryptoList() {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error('Failed to fetch crypto prices');
  return res.json();
}

export async function fetchCoinById(id: string) {
  const res = await fetch(`${BASE_URL}/coins/${id}`);

  if (!res.ok) throw new Error(`Failed to fetch coin with id: ${id}`);
  return res.json();
}