import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
}: Readonly<FeatureCardProps>) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        width={156}
        height={156}
        src={icon ?? ""}
        alt={title}
        className="h-[156px] w-[156px]"
      />
      <div className="text-center mt-3">
        <h3 className="uppercase text-xl font-semibold text-zrgreen">
          {title}
        </h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};
