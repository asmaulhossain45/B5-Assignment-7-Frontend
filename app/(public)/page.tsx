"use client";

import ProfileCard from "@/components/cards/ProfileCard";
import TiltCard from "@/components/cards/TiltCard";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
      <ProfileCard />

      <section className="col-span-2 grid grid-cols-2 gap-4">
        <TiltCard>
          <h1>{session?.user?.name}</h1>
        </TiltCard>

        <TiltCard>
          <h1>2</h1>
        </TiltCard>

        <TiltCard className="col-span-2">
          <h1>3</h1>
        </TiltCard>

        <TiltCard>
          <h1>4</h1>
        </TiltCard>

        <TiltCard>
          <h1>5</h1>
        </TiltCard>
      </section>
    </div>
  );
};

export default HomePage;
