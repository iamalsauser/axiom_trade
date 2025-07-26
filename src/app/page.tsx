"use client"

import { TokenTable } from '../../components/organisms/token-table';
import { useTokenData } from '../../hooks/use-token-data';

export default function HomePage() {
  const { tokens, loading, error } = useTokenData();

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold mb-6">Token Discovery Table</h1>
      <TokenTable tokens={tokens} loading={loading} error={error} />
    </section>
  );
} 