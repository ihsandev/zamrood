export type ProductParamsType = {
  highlight?: boolean;
};

export type UseProductsType = {
  params?: ProductParamsType;
  enabled?: boolean;
  queryKey: string[];
};

export type UseArticlesType = {
  enabled?: boolean;
  queryKey: string[];
};

export type RelatedGalleriesType = {
  itinerary_id: string;
  gallery_id: number | string;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
};

export type RelatedVariantType = {
  itinerary_id: string;
  itinerary_variant_id: number | string;
  itinerary_variant_pub_price: string | number;
  itinerary_variant_disc_price: string | number;
  unit_name: string;
  related_unit: string | null;
};

export type ProductsResponseType = {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: RelatedGalleriesType[];
  related_variant: RelatedVariantType;
};
