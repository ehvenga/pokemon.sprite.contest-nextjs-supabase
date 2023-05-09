import PokemonChoice from '@/components/PokemonChoice';

export default async function Home() {
  return (
    <main className='mt-32'>
      <h2 className='w-full text-center text-2xl mt-5 pb-2 font-medium'>
        Choose the best looking sprite
      </h2>
        <PokemonChoice />
    </main>
  );
}
