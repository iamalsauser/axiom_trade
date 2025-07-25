import { TokenTable } from '../components/organisms/TokenTable';

export default function HomePage() {
  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold mb-6">Token Discovery Table</h1>
      <TokenTable />
    </section>
  );
} 