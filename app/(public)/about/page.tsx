import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const AboutPage = async () => {
  const session = await getServerSession(authOptions);

  console.log("Server Session:", session);
  return <div>AboutPage</div>;
};

export default AboutPage;
