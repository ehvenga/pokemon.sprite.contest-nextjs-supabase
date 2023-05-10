const Footer: React.FC = () => {
  return (
    <footer className='w-full flex justify-center gap-x-3 text-xs 2xl:text-sm'>
      <a
        href='https://twitter.com/ehvenga'
        className='hover:underline hover:underline-offset-4 hover:text-sky-900 hover:dark:text-sky-100'
      >
        twitter
      </a>
      <a
        href='https://github.com/ehvenga'
        className='hover:underline hover:underline-offset-4 hover:text-sky-900 hover:dark:text-sky-100'
      >
        github
      </a>
      <a
        href='https://www.linkedin.com/in/ehvenga/'
        className='hover:underline hover:underline-offset-4 hover:text-sky-900 hover:dark:text-sky-100'
      >
        linkedin
      </a>
    </footer>
  );
};

export default Footer;
