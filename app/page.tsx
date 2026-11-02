import Image from "next/image";
import { JourneyScene } from "@/components/journey-scene";
import { CatalogueGrid } from "@/components/catalogue-grid";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { catalogueCategories } from "@/data/catalogue";

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEGH Overseas Private Limited",
  alternateName: "MEGH Fresh & Healthy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.meghfoods.com",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.meghfoods.com"}/icon.svg`,
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  description: "Ahmedabad-based exporter connecting Indian food products with international markets.",
  knowsAbout: ["Indian food products", "International food export", "Food sourcing"],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-98982-49755", contactType: "sales", areaServed: "Worldwide", availableLanguage: ["English", "Hindi"] },
    { "@type": "ContactPoint", telephone: "+91-96625-99930", contactType: "business enquiries", areaServed: "Worldwide" },
  ],
};

const approachSteps = [
  {
    number: "01 / SOURCING",
    title: "Sourced with care",
    description: "Connecting the goodness of India with people around the world.",
    icon: "origin",
  },
  {
    number: "02 / PREPARATION",
    title: "Prepared with purpose",
    description: "A thoughtful journey from our home in Ahmedabad to yours.",
    icon: "care",
  },
  {
    number: "03 / EXPORT",
    title: "Ready for the world",
    description: "Building lasting connections across borders and markets.",
    icon: "world",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <JourneyScene />

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="story-photo-wrap" data-reveal>
            <Image src="/assets/port-terminal.png" alt="Colorful cargo containers at a shipping port" fill sizes="(max-width: 760px) 90vw, 42vw" />
            <span className="photo-stamp">FROM INDIA<br />WITH CARE</span>
          </div>
          <div className="story-content" data-reveal>
            <p className="section-label"><span>01</span> OUR STORY</p>
            <h2 id="story-title">A taste of home,<br /><em>wherever you are.</em></h2>
            <p className="story-lede">We bring the spirit of India a little closer to people and partners around the world.</p>
            <p>From our home in Ahmedabad, Megh Overseas connects Indian food with international markets. Every journey begins with care, purpose and a deep pride in where we come from.</p>
            <div className="story-facts"><div><strong>2014</strong><span>Rooted in Ahmedabad</span></div><div><strong>India → world</strong><span>Food made to travel</span></div></div>
          <a className="text-link" href="/about">Get to know our story <span>↗</span></a>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-header" data-reveal>
            <div><p className="section-label"><span>02</span> FROM AHMEDABAD TO THE WORLD</p><h2 id="approach-title">A journey built<br /><em>on care &amp; connection.</em></h2></div>
            <p>Behind every journey is a network of people, partnerships and possibilities. This is how we bring India closer to the world.</p>
          </div>
          <div className="approach-grid">
            {approachSteps.map((step) => (
              <article className="approach-card" key={step.number} data-reveal>
                <div className={`approach-visual visual-${step.icon}`} aria-hidden="true"><span>{step.number.slice(0, 2)}</span><i></i></div>
                <div className="approach-meta"><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></div>
              </article>
            ))}
          </div>
          <div className="approach-note" data-reveal><span>OUR HOME BASE</span><p>Ahmedabad, Gujarat, India <i>·</i> Connecting with markets worldwide</p></div>
        </section>

        <section className="catalogue-section" id="products" aria-labelledby="range-title">
          <div className="catalogue-header" data-reveal>
            <div><p className="section-label"><span>03</span> A TASTE OF THE RANGE</p><h2 id="range-title">Indian favourites,<br /><em>ready to travel.</em></h2></div>
            <a className="text-link" href="/products">Explore all products <span>↗</span></a>
          </div>
          <CatalogueGrid items={[catalogueCategories[9], catalogueCategories[12], catalogueCategories[18]]} featured />
          <a className="catalogue-more" href="/products">VIEW THE FULL RANGE <span>↗</span></a>
        </section>

        <section className="markets-strip" id="markets" aria-labelledby="markets-title">
          <div><p className="section-label"><span>04</span> FROM INDIA TO THE WORLD</p><h2 id="markets-title">A world of connections.</h2></div>
          <p>From Ahmedabad to the United States and markets around the world, we help Indian food travel further.</p>
          <a className="text-link" href="/markets">Our markets <span>↗</span></a>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-background"></div>
          <div className="closing-content"><p className="eyebrow"><span className="eyebrow-dot"></span> MEGH OVERSEAS · AHMEDABAD, GUJARAT</p><h2 id="closing-title">A little bit of India.<br /><em>A little closer to home.</em></h2><a href="/contact" className="back-to-top">LET’S CONNECT <span>↗</span></a></div>
          <span className="closing-seal">MEGH<br /><small>FRESH &amp; HEALTHY</small></span>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }} />
    </>
  );
}
