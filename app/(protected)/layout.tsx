import Navbar from '@/components/home/Navbar';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-background">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
