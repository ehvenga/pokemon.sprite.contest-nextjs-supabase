'use client';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className='flex items-center flex-col'>
      <div className='w-full text-center text-xl mt-8'>
        Something went wrong
      </div>
      <button
        className=' text-center mt-2 py-2 px-4 rounded-md border border-gray-500 hover:shadow-md'
        onClick={reset}
      >
        Try again
      </button>
    </section>
  );
};

export default Error;
