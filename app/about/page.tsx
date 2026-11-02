import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About MEGH Overseas",
  description: "Get to know MEGH Overseas, an Ahmedabad based Indian food exporter rooted in sourcing, care and global connections.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About MEGH Overseas", description: "Rooted in Ahmedabad. Connecting Indian food with the world.", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <section className="inner-hero" aria-labelledby="about-title">
          <Image src="/assets/port-terminal.png" alt="Shipping containers and cargo vessel at a global port" fill priority sizes="100vw" />
          <div className="inner-hero-shade"></div>
          <div className="inner-hero-copy"><p className="eyebrow"><span className="eyebrow-dot"></span> OUR STORY · AHMEDABAD, INDIA</p><h1 id="about-title">Rooted in India.<br /><em>Open to the world.</em></h1></div>
        </section>
        <section className="inner-story">
          <div><p className="section-label"><span>01</span> WHO WE ARE</p><h2>Local roots.<br /><em>A global outlook.</em></h2></div>
          <div className="inner-story-copy"><p className="story-lede">MEGH Overseas brings Indian food and global markets closer together.</p><p>Based in Ahmedabad, Gujarat, we work across sourcing, preparation, quality control and international trade. Since 2014, our focus has been on building thoughtful, dependable journeys from India to customers around the world.</p><a className="text-link" href="/contact">Talk to our team <span>↗</span></a></div>
        </section>
        <section className="about-values">
          <article><span>01 / ROOTED HERE</span><h3>Ahmedabad, Gujarat</h3><p>Our home base connects us with India's diverse food traditions and sourcing network.</p></article>
          <article><span>02 / BUILT ON CARE</span><h3>People and partnerships</h3><p>We value clear communication, careful preparation and long term working relationships.</p></article>
          <article><span>03 / LOOKING OUTWARD</span><h3>Made to travel</h3><p>We coordinate with buyers and partners to bring Indian foods to international markets.</p></article>
        </section>
        <section className="subpage-cta"><p className="eyebrow"><span className="eyebrow-dot"></span> MEGH OVERSEAS · AHMEDABAD</p><h2>Let’s take the next step<br /><em>together.</em></h2><a className="nav-cta" href="/contact">Contact our team <span>↗</span></a></section>
      </main>
      <SiteFooter />
    </>
  );
}
