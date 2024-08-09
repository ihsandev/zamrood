"use client";

import { useProducts } from "@/hooks/useProducts";
import { DestinationCard } from "../_components/destination-card";
import { ExploreButton } from "../_components/explore-button";
import { Title } from "../_components/title";

export const Destinations = () => {
  const { data, isFetching } = useProducts({ queryKey: ["fetch-products"] });
  const { data: highlight, isFetching: isFetchHighligh } = useProducts({
    queryKey: ["fetch-hightlight-products"],
    params: { highlight: true },
  });
  return (
    <section className="min-h-screen py-16" id="destination">
      <div className="h-full md:max-w-screen-lg px-4 md:px-0 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-x-6">
          <Title text="Destinations" />
          <div className="-ml-4 mt-3 md:-ml-0 md:mt-0">
            <ExploreButton />
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-y-20 w-full">
          {highlight?.map((product) => (
            <DestinationCard
              key={product.itinerary_id}
              images={product.related_galleries}
              title={product.itinerary_name}
              organizer={product.partner_name}
              description={product.itinerary_short_description}
              discount={Number(
                product.related_variant.itinerary_variant_disc_price
              )}
              price={Number(
                product.related_variant.itinerary_variant_pub_price
              )}
              duration={product.itinerary_day}
            />
          ))}
        </div>
        <div className="flex overflow-x-auto space-x-4 mt-16 w-full">
          {data?.slice(0, 4).map((product) => (
            <DestinationCard
              direction="col"
              key={product.itinerary_id}
              images={product.related_galleries}
              title={product.itinerary_name}
              organizer={product.partner_name}
              urlDetail={`/destination/${product.itinerary_slug}`}
              description={product.itinerary_short_description}
              discount={Number(
                product.related_variant.itinerary_variant_disc_price
              )}
              price={Number(
                product.related_variant.itinerary_variant_pub_price
              )}
              duration={product.itinerary_day}
            />
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-12">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
};
