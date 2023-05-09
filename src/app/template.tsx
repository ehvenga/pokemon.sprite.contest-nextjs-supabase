import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-[95svh]'>
      <Header />
      <Navbar />
      <>{children}</>
    </div>
  );
};

export default Template;
