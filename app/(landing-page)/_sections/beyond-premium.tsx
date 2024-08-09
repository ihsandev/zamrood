import { FeatureCard } from "@/app/(landing-page)/_components/feature-card";

export const BeyondPremium = () => {
  return (
    <section className="min-h-screen">
      <div className="h-full md:max-w-screen-lg mx-auto px-4 md:px-0">
        <div className="text-center mt-10 -space-y-3">
          <h2 className="font-signature text-5xl text-zrgreen">
            Beyond Premium
          </h2>
          <h1 className="font-unbounded text-xl uppercase font-bold text-zrdarkgreen">
            Elevate Your Experience
          </h1>
        </div>
        <div className="flex justify-between mt-12 flex-col md:flex-row gap-2">
          <FeatureCard
            icon="/icons/ic_personal_itineraries.svg"
            title="Personal Initeraries"
            description="Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires."
          />
          <FeatureCard
            icon="/icons/ic_exclusive_experience.svg"
            title="Exclusive Experiences"
            description="From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level."
          />
          <FeatureCard
            icon="/icons/ic_best_facilities.svg"
            title="Best Facilities"
            description="Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence."
          />
        </div>
      </div>
    </section>
  );
};
