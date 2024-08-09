import { Articles } from "./_sections/articles";
import { BeyondPremium } from "./_sections/beyond-premium";
import { Destinations } from "./_sections/destinations";
import { DiscoverTailored } from "./_sections/discover-tailored";
import { Footage } from "./_sections/footage";
import { JumboTron } from "./_sections/jumbo-tron";

const LandingPage = async () => {
  return (
    <div>
      <JumboTron />
      <BeyondPremium />
      <DiscoverTailored />
      <Destinations />
      <Footage />
      <Articles />
    </div>
  );
};

export default LandingPage;
