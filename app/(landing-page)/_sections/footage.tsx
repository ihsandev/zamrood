"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { SeparatorImage } from "../_components/separator-image";

const footageImages = [
  { src: "/images/footage-1.webp" },
  { src: "/images/footage-2.jpeg" },
  { src: "/images/footage-3.webp" },
  { src: "/images/footage-4.webp" },
  { src: "/images/footage-5.webp" },
  { src: "/images/footage-6.webp" },
];

const FootageItem = ({
  images,
  slice,
}: {
  images: { src: string }[];
  slice: { from: number; to: number };
}) => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        {images.slice(slice.from, slice.to).map((footage, idx) => (
          <div
            key={idx}
            className="cursor-pointer relative h-[349px] w-full"
            onClick={() => setIndex(idx + slice.from)}
          >
            <Image
              src={footage.src}
              fill
              alt={`Footage ${idx}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
};

export const Footage = () => {
  return (
    <section className="min-h-screen bg-zrorange py-12">
      <div className="md:max-w-screen-lg mx-auto px-4 md:px-0">
        <h2 className="font-signature text-5xl text-zrdarkgreen">
          Luxury Footage
        </h2>
        <div className="mt-6">
          <FootageItem images={footageImages} slice={{ from: 0, to: 3 }} />
          <div>
            <SeparatorImage />
          </div>
          <FootageItem images={footageImages} slice={{ from: 3, to: 6 }} />
        </div>
      </div>
    </section>
  );
};
