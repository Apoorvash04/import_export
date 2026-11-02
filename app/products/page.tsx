import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CatalogueGrid } from "@/components/catalogue-grid";

export const metadata: Metadata = {
  title: "Indian Food Product Range",
  description: "Browse the MEGH catalogue of Indian food categories, from flours, rice and snacks to sweets and pantry essentials.",
  alternates: { canonical: "/products" },
  openGraph: { title: "MEGH Indian Food Product Range", description: "Explore food categories from the MEGH Overseas catalogue.", url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <section className="catalogue-page-intro" aria-labelledby="products-title">
          <p className="section-label"><span>MEGH</span> OUR PRODUCT RANGE</p>
          <h1 id="products-title">A little something<br /><em>for every table.</em></h1>
          <p>Explore the categories in our current catalogue. Each one brings a taste of India a little closer to home.</p>
        </section>
        <section className="catalogue-page-grid" aria-label="MEGH catalogue product categories">
          <CatalogueGrid />
        </section>
        <section className="subpage-cta"><p className="eyebrow"><span className="eyebrow-dot"></span> LOOKING FOR A PRODUCT OR PACK SIZE?</p><h2>We’d be glad<br /><em>to help.</em></h2><a className="nav-cta" href="/contact">Ask our team <span>↗</span></a></section>
      </main>
      <SiteFooter />
    </>
  );
}
