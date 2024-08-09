import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  thumbnail: string;
  description: string;
  className?: string;
  url?: string;
}

export const ArticleCard = ({
  thumbnail,
  description,
  className,
  url,
}: Readonly<ArticleCardProps>) => {
  return (
    <Link
      href={url ?? ""}
      className={cn(`w-full md:h-full flex flex-col h-[256px]`, className)}
    >
      <div className="relative h-full w-full">
        <Image
          fill
          src={thumbnail}
          alt="Article Image"
          className="object-cover object-center grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <div className="bg-zrgreen flex items-center justify-center h-[70px] overflow-hidden p-2">
        <span className="text-sm line-clamp-2 text-white">{description}</span>
      </div>
    </Link>
  );
};
