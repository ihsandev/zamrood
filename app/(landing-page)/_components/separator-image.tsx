import Image from "next/image";

export const SeparatorImage = ({
  variant = "white",
}: {
  variant?: "white" | "colored";
}) => {
  return (
    <Image
      width={1096}
      height={97}
      alt="Separator Line Bottom"
      src={
        variant === "colored"
          ? "/spr_line_bottom.svg"
          : "/spr_line_bottom_white.svg"
      }
    />
  );
};
