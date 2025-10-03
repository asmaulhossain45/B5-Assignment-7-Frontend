import Navbar from "@/components/layouts/Navbar";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="inner-container min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col">{children}</main>
      <Navbar />
    </div>
  );
};

export default AuthLayout;
