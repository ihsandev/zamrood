"use client";

import { useArticles } from "@/hooks/useArticles";
import { ArticleCard } from "../_components/article-card";
import { OtherDestination } from "../_components/other-destination";
import { Title } from "../_components/title";

export const Articles = () => {
  const { data: articles } = useArticles({ queryKey: ["fetch-articles"] });
  return (
    <section id="article" className="min-h-[255vh] md:min-h-screen py-16">
      <div className="md:max-w-screen-lg mx-auto px-4 md:px-0">
        <OtherDestination />
        <div className="mt-16">
          <div>
            <Title text="Articles" />
            <p className="text-zrgreen">
              Our curated writings, offering something for every reader.
            </p>
          </div>
          <article className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] w-full">
            {articles?.map((article, idx) => (
              <ArticleCard
                key={article.id}
                url={`/article/${article.slug}`}
                className={`${idx === 0 && "md:col-span-2 md:row-span-2"}`}
                thumbnail={article.featured_image}
                description={article.title}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};
