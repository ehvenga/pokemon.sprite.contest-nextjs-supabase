const Header: React.FC = () => {
  return (
    <header className='flex justify-center flex-wrap'>
      <h1 className='w-full text-center mb-2 text-5xl 2xl:text-7xl font-bold text-sky-900 dark:text-sky-100'>
        Pokémon Sprite Contest
      </h1>
      <div className='flex justify-center mb-4 text-4xl 2xl:text-6xl font-bold text-sky-600 dark:text-sky-500'>
        <p className='w-8/12 text-center'>
          Its time to decide which generation has the best sprites
        </p>
      </div>
    </header>
  );
};

export default Header;
