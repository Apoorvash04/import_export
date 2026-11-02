import Image from "next/image";
import Link from "next/link";
import { catalogueCategories, type CatalogueCategory } from "@/data/catalogue";

export function CatalogueGrid({
  items = catalogueCategories,
  featured = false,
}: {
  items?: CatalogueCategory[];
  featured?: boolean;
}) {
  return (
    <div className={`catalogue-grid${featured ? " catalogue-grid--featured" : ""}`}>
      {items.map((item, index) => (
        <article className="catalogue-card" key={item.slug} data-reveal>
          <Link className="catalogue-image" href="/contact" aria-label={`Ask MEGH about ${item.name}`}>
            <Image
              src={item.image}
              alt={`MEGH ${item.name} range, catalogue page ${item.page}`}
              fill
              sizes={featured ? "(max-width: 760px) 88vw, 30vw" : "(max-width: 760px) 46vw, 23vw"}
              priority={featured && index === 0}
            />
          </Link>
          <div className="catalogue-meta"><span>MEGH · PRODUCT RANGE</span><h3>{item.name}</h3></div>
        </article>
      ))}
    </div>
  );
}
