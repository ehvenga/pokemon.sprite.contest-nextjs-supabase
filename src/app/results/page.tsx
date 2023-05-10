export const metadata = {
  title: 'Pokémon Sprite Contest | Results',
  description: 'To find out the best sprites in Pokemon games',
};

const ResultPage: React.FC = () => {
  return (
    <main className='text-center flex justify-center'>
      <section className='w-1/3 flex flex-col gap-y-3 2xl:gap-y-6'>
        <h2 className='text-2xl text-sky-900 dark:text-sky-100'>Results</h2>
        <p>
          The objective of this project is to gather information on the most
          favored Pokemon sprite generation and analyze the community's
          preferences. The project aims to track and compare the popularity of
          sprites across different generations.
        </p>
      </section>
    </main>
  );
};
export default ResultPage;
