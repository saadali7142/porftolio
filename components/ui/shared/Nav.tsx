import { motion } from "framer-motion";
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#services", name: "Services" },
  { path: "#work", name: "Projects" },
];
interface INavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}
const Nav = ({ containerStyles, linkStyles, underlineStyles }: INavProps) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
