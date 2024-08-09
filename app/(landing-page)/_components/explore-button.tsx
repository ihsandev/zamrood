import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

export const ExploreButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-x-2 text-zrgreen hover:bg-transparent hover:text-zrorange"
    >
      <ChevronRightCircle strokeWidth={1} size={44} />
      <span className="uppercase">Explore More</span>
    </Button>
  );
};
