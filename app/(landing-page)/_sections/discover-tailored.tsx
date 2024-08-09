import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Title } from "../_components/title";
import { SeparatorImage } from "../_components/separator-image";

export const DiscoverTailored = () => {
  return (
    <section
      id="customize-your-trip"
      className="min-h-screen md:min-h-[500px] py-16 md:py-0"
    >
      <div className="flex flex-col md:flex-row items-center md:max-w-screen-lg mx-auto px-4 md:px-0 gap-4">
        <div>
          <Image
            width={329}
            height={329}
            src="/illustrations/il_discover_tailored.svg"
            alt="Discover Tailored Experience"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <Title text=" Discover Tailored Experiences" />
          <p className="max-w-lg">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <div>
            <Button
              size="lg"
              className="bg-zrdarkgreen hover:bg-zrgreen w-full md:w-auto"
            >
              Customize Your Trip
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-12">
        <SeparatorImage variant="colored" />
      </div>
    </section>
  );
};
