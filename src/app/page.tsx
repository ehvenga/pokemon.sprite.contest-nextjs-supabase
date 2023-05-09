import PokemonChoice from '@/components/PokemonChoice';

export default async function Home() {
  return (
    <main className='mt-20'>
      <h2 className='w-full text-center text-2xl mt-5 pb-2 font-light text-sky-900 dark:text-sky-100'>
        Choose the best looking sprite
      </h2>
      <PokemonChoice />
    </main>
  );
}
