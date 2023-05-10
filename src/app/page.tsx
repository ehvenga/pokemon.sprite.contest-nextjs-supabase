import PokemonChoice from '@/components/PokemonChoice';

export const metadata = {
  title: 'Pokémon Sprite Contest | Poll',
  description: 'To find out the best sprites in Pokemon games',
};

export default async function Home() {
  return (
    <main>
      <PokemonChoice />
    </main>
  );
}
