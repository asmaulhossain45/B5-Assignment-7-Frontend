import Navbar from "@/components/layouts/Navbar";

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
