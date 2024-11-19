import ChampagneCard from '@/components/ChampagneCard';
import { query } from '@/lib/db';

export default async function Home() {
    // Fetch data from the database
    const champagnes = await query('SELECT name, description, price FROM champagnes');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="mb-8">Hello world I&apos;m here to welcome you to my new app</h1>
      <h1 className="text-red-500">Test Red Text</h1>
      <div className="grid gap-4">
        {champagnes.map((champagne: { name: string; description: string; price: string }, index: number) => (
          <ChampagneCard
            key={index}
            name={champagne.name}
            description={champagne.description}
            price={champagne.price}
          />
        ))}
      </div>
    </main>
  );
}
