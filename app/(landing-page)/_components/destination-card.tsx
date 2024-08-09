"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IMAGE_URL } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { RelatedGalleriesType } from "@/types/products";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  images: RelatedGalleriesType[];
  duration: number;
  title: string;
  organizer: string;
  description: string;
  discount: number;
  price: number;
  direction?: "col" | "row";
  urlDetail?: string;
}

export const DestinationCard = ({
  images,
  duration,
  title,
  organizer,
  description,
  discount,
  price,
  direction = "row",
  urlDetail,
}: Readonly<DestinationCardProps>) => {
  const isDirectionCol = direction === "col";
  return (
    <article
      className={`flex md:w-full flex-col md:flex-${direction} gap-4 flex-shrink-0 md:flex-shrink ${
        !isDirectionCol && "md:even:flex-row-reverse"
      } ${isDirectionCol && "w-[80%] md:w-[24%]"}`}
    >
      <div className={`${isDirectionCol ? "md:w-full" : "md:w-1/2"}`}>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {images?.map((img) => (
              <CarouselItem key={img.gallery_id}>
                <Card
                  className={`relative h-[200px] ${
                    isDirectionCol ? "md:h-[250px]" : "md:h-[374px]"
                  } overflow-hidden rounded-none`}
                >
                  <Image
                    alt={`destination-${img.title}`}
                    src={`${IMAGE_URL}/${img.gallery_path}`}
                    className="object-cover"
                    fill
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className={`${isDirectionCol ? "md:w-full" : "md:w-1/2"}`}>
        <div
          className={`flex flex-col justify-between ${
            isDirectionCol ? "h-[280px]" : "h-full"
          }`}
        >
          <div>
            <span className="uppercase text-zrdarkgreen font-medium">{`${duration} days`}</span>
            <h2
              className={`text-zrgreen text-xl ${
                isDirectionCol ? "text-xl" : "md:text-2xl"
              } font-unbounded my-2 line-clamp-2 font-semibold`}
            >
              {title}
            </h2>
            <div>
              <span className="text-zrdarkgreen font-bold mb-1">{`Organized by ${organizer}`}</span>
              {!isDirectionCol && (
                <p className="text-zrdarkgreen line-clamp-4">{description}</p>
              )}
            </div>
          </div>
          <div
            className={`flex justify-between ${
              isDirectionCol
                ? "flex-col mt-5"
                : "flex-row items-end mt-10 md:mt-0"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-zrdarkgreen">Start from</span>
              {discount > 0 && (
                <p className="line-through text-zrgrey font-semibold uppercase font-unbounded">
                  {formatPrice({ price })}
                </p>
              )}
              <p className="font-unbounded text-xl md:text-2xl font-semibold text-zrgreen">
                {formatPrice({ price: discount > 0 ? discount : price })}
              </p>
            </div>
            <div className={`${isDirectionCol ? "mt-3" : "mt-0"}`}>
              <Button
                variant="primary"
                className="border-zrdarkgreen text-zrdarkgreen"
                asChild
                size="lg"
              >
                <Link href={urlDetail ?? ""}>See Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
