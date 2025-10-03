import Navbar from "@/components/layouts/Navbar";

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <div className="h-screen max-w-7xl mx-auto flex flex-col-reverse lg:flex-col gap-4 overflow-hidden lg:p-4">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-0">{children}</main>
    </div>
  );
};

export default PublicLayout;
