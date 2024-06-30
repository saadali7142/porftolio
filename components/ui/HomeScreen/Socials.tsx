"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri";
interface ISocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}
const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://www.linkedin.com/in/saad-ali-94062a1b4/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/saadali7142",
    name: <RiGithubFill />,
  },
  {
    path: "mailto:saadali7142@gmail.com",
    name: <RiMailFill />,
  },
  {
    path: "https://wa.me/+923364973745",
    name: <RiWhatsappFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }: ISocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
