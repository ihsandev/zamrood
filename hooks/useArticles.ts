import { callAPI } from "@/lib/api";
import { ArticlesResponse } from "@/types/articles";
import { UseArticlesType } from "@/types/products";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const getArticles = async () => {
  try {
    const products = await callAPI(`/api/zamrood/article`);
    return products.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("Axios Error");
    }

    throw new Error("Unknown Error");
  }
};

export const useArticles = ({
  enabled,
  queryKey,
}: UseArticlesType): UseQueryResult<ArticlesResponse[]> => {
  return useQuery({
    queryKey,
    queryFn: getArticles,
    enabled,
  });
};
