import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Global Food Export Markets",
  description: "MEGH Overseas connects Ahmedabad based Indian food sourcing with buyers and partners in the United States and worldwide.",
  alternates: { canonical: "/markets" },
  openGraph: { title: "MEGH Overseas Markets", description: "From Ahmedabad to food buyers and partners around the world.", url: "/markets" },
};

const markets = [
  { number: "01", title: "United States", copy: "Bringing Indian food closer to buyers, retailers and communities across the US." },
  { number: "02", title: "Europe & UK", copy: "Building connections with international partners looking for food from India." },
  { number: "03", title: "Worldwide", copy: "A global outlook, with trade relationships shaped around each market." },
];

export default function MarketsPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <section className="markets-hero" aria-labelledby="markets-title">
          <p className="section-label"><span>MEGH</span> OUR MARKETS</p>
          <h1 id="markets-title">From Ahmedabad,<br /><em>to everywhere.</em></h1>
          <p>Our work connects Indian food with buyers and partners across borders—starting at home in Gujarat and reaching markets around the world.</p>
          <div className="market-route"><span>AHMEDABAD, INDIA</span><i></i><span>GLOBAL MARKETS</span></div>
        </section>
        <section className="markets-grid" aria-label="MEGH export markets">
          {markets.map((market) => <article key={market.number}><span>{market.number} / MARKET</span><h2>{market.title}</h2><p>{market.copy}</p></article>)}
        </section>
        <section className="markets-support"><div><p className="section-label"><span>OUR APPROACH</span></p><h2>Good partnerships<br /><em>travel further.</em></h2></div><p>Our Ahmedabad team works with buyers to understand their market, product requirements and packaging needs. We coordinate sourcing, preparation and export with care.</p><a className="text-link" href="/contact">Start a conversation <span>↗</span></a></section>
      </main>
      <SiteFooter />
    </>
  );
}
