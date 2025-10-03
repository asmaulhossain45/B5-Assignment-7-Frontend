import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-extrabold">404</h1>

      <h3 className="text-2xl font-bold">Opps! Page not found</h3>

      <p className="text-sm">The page you are looking for does not exist.</p>

      <Link href={"/"} className="mt-4">
        <Button className="text-white">Go Home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
