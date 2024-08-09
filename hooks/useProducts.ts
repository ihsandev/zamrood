import { callAPI } from "@/lib/api";
import {
  ProductParamsType,
  ProductsResponseType,
  UseProductsType,
} from "@/types/products";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const getProducts = async (params: ProductParamsType = {}) => {
  try {
    const products = await callAPI(`/api/zamrood/itinerary`, { params });
    return products.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("Axios Error");
    }

    throw new Error("Unknown Error");
  }
};

export const useProducts = ({
  params,
  enabled,
  queryKey,
}: UseProductsType): UseQueryResult<ProductsResponseType[]> => {
  return useQuery({
    queryKey,
    queryFn: async () => await getProducts(params),
    enabled,
  });
};
