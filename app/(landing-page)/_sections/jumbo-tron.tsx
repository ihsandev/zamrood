import { Button } from "@/components/ui/button";

export const JumboTron = () => {
  return (
    <section
      id="jumbo-tron"
      className="bg-center h-screen bg-no-repeat bg-[url('/images/header_photo.png')] px-4 md:px-0"
    >
      <div className="h-full flex flex-col justify-center mx-auto md:max-w-screen-lg text-center md:text-left">
        <div className="-space-y-9 md:-space-y-8 md:pt-32">
          <p className="font-signature text-8xl text-zrorange">
            Premium Travel
          </p>
          <p className="font-unbounded text-[26px] md:text-4xl font-bold text-white">
            Beyond Expectation
          </p>
        </div>
        <p className="max-w-screen-sm text-white mt-2 md:mt-4 text-xl md:text-2xl text-center md:text-left">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <div className="mt-4">
          <Button variant="primary">Take me there</Button>
        </div>
      </div>
    </section>
  );
};
