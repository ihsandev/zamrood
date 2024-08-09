import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = ({
  price,
  currency = "IDR",
}: {
  price: number;
  currency?: string;
}) => {
  return price?.toLocaleString("id-ID", {
    currency,
    style: "currency",
    maximumFractionDigits: 0,
    currencyDisplay: "code",
  });
};
