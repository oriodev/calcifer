const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full  flex justify-center items-center bg-gradient-to-b from-slate-900 to-slate-600">
      {children}
    </div>
  );
};

export default AuthLayout;
