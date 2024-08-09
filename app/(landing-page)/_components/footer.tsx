import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zrdarkgreen h-[72px] flex items-center justify-center w-full text-center md:text-left">
      <div className="md:max-w-screen-lg px-4 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center mx-auto w-full text-white">
        <span className="text-xs md:text-base mb-2 md:mb-0">
          &copy;{new Date().getFullYear()} Zamrood by PT Teknologi Pandu Wisata
        </span>
        <div className="flex items-center gap-4 md:justify-start justify-center">
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Instagram />
          </Link>
          <Link href="">
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
