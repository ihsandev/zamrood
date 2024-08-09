import { Logo } from "@/components/logo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const OtherDestination = () => {
  return (
    <div
      className={`relative overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-stone-900 before:to-stone-800 before:z-[-5] before:opacity-40 bg-[url('/images/other-destination-bg.webp')] bg-cover bg-no-repeat bg-center h-[102px] w-full p-6 flex items-center justify-start`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full text-white">
        <Logo variant="white" />
        <div className="md:text-right text-center text-sm md:text-base">
          <p>Want to see other destinations? Check us out at our website</p>
          <Link
            className="underline font-unbounded flex items-center justify-center md:justify-end"
            href="https://pandooin.com/id"
            passHref
            target="_blank"
          >
            <span>pandooin.com</span>
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
