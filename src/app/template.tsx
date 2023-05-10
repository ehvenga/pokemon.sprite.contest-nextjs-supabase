import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-[100svh] pt-12 pb-6 2xl:pt-18 2xl:pb-8 flex flex-col justify-between'>
      <div className='flex flex-col gap-y-3 2xl:gap-y-5'>
        <Header />
        <Navbar />
      </div>
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Template;
