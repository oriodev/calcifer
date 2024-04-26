const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-background">{children}</div>;
};

export default ProtectedLayout;
