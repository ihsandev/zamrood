import Image from "next/image";

export const Logo = ({
  variant = "colored",
  className,
}: {
  variant?: "white" | "colored";
  className?: string;
}) => {
  return (
    <div>
      <Image
        className={className}
        width={134}
        height={50}
        src={`${variant === "white" ? "/logo_white.svg" : "/logo_colored.svg"}`}
        alt="Logo Navbar"
      />
    </div>
  );
};
