import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full text-lg 2xl:text-xl flex justify-center gap-x-5'>
      <Link className='hover:underline hover:underline-offset-8' href={'/'}>
        Home
      </Link>
      <Link
        className='hover:underline hover:underline-offset-8'
        href={'/results'}
      >
        Results
      </Link>
      <Link
        className='hover:underline hover:underline-offset-8'
        href={'/about'}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
