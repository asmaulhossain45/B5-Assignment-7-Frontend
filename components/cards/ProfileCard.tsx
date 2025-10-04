import MyImage from "@/public/Asmaul_Hossain.png";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MessageCircle,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";
import { Button } from "../ui/button";
import TiltCard from "./TiltCard";

type SocialLink = {
  label: string;
  href: string;
  icon: ElementType;
};

const ProfileCard = () => {
  const socialLinks: SocialLink[] = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/asmaulhossain45/",
      icon: FacebookIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.facebook.com/asmaulhossain45/",
      icon: LinkedinIcon,
    },
    {
      label: "Instagram",
      href: "https://www.facebook.com/asmaulhossain45/",
      icon: InstagramIcon,
    },
    {
      label: "Twitter",
      href: "https://www.facebook.com/asmaulhossain45/",
      icon: TwitterIcon,
    },
    {
      label: "Github",
      href: "https://www.facebook.com/asmaulhossain45/",
      icon: GithubIcon,
    },
  ];

  return (
    <TiltCard>
      <Image
        src={MyImage}
        alt="Asmaul Hossain"
        width={500}
        height={500}
        quality={100}
        priority={false}
        loading="lazy"
        className="w-full h-auto object-cover"
      />

      <div className="space-y-4 mt-4">
        <h2 className="text-3xl font-bold font-primary">Asmaul Hossain</h2>
        <p>
          A passionate Full Stack Developer & Product Designer with over 5+
          years of, innovative solutions across.
        </p>

        <div className="bg-background p-4 rounded-md space-y-2">
          <p>Phone: +88 017 9646 9894</p>
          <p>Email: asmaulhosen45@gmail.com</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant={"outline"} size={"lg"}>
            <MessageCircle /> Whatsapp
          </Button>
          <Button variant={"outline"} size={"lg"}>
            <Mail /> Email
          </Button>
        </div>

        <ul className="flex items-center justify-center gap-3">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block bg-foreground/5 p-3 rounded-full"
              >
                <item.icon size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TiltCard>
  );
};

export default ProfileCard;
