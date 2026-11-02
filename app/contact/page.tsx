import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact MEGH Overseas",
  description: "Contact MEGH Overseas in Ahmedabad for Indian food export, product and business enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact MEGH Overseas", description: "Reach the MEGH Overseas team in Ahmedabad, Gujarat.", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <section className="contact-intro" aria-labelledby="contact-title">
          <p className="section-label"><span>MEGH OVERSEAS</span> GET IN TOUCH</p>
          <h1 id="contact-title">Let’s talk about<br /><em>what’s next.</em></h1>
          <p>Connect with our Ahmedabad team for product, export and business enquiries.</p>
        </section>
        <section className="contact-details" aria-label="MEGH Overseas contact information">
          <div className="contact-card contact-sales"><span>SALES &amp; MARKETING</span><h2>Palak Malik</h2><a href="tel:+919898249755">+91 98982 49755</a><small>Product and sales enquiries</small></div>
          <div className="contact-card"><span>DIRECTOR</span><h2>Jigar Bhavsar</h2><a href="tel:+919898255500">Mobile: +91 98982 55500</a><a href="tel:+919662599930">Office: +91 96625 99930</a></div>
        </section>
        <section className="contact-addresses">
          <article><span>REGISTERED OFFICE</span><h2>Ahmedabad, Gujarat</h2><address>A-43 Aditya Residency,<br />Near Swagat Green Villa Bungalows,<br />Thaltej, Ahmedabad 380059,<br />Gujarat, India</address><a href="https://maps.google.com/?q=A-43+Aditya+Residency+Thaltej+Ahmedabad+380059" target="_blank" rel="noreferrer">Open in Maps ↗</a></article>
          <article><span>WAREHOUSE &amp; FACTORY</span><h2>Changodar, Ahmedabad</h2><address>Shed No. 6, Marutinandan Estate,<br />Tajpur Road, Changodar,<br />Ahmedabad, Gujarat, India</address></article>
        </section>
        <section className="contact-web"><span>VISIT OUR WEBSITE</span><a href="https://www.meghfoods.com" target="_blank" rel="noreferrer">www.meghfoods.com ↗</a></section>
      </main>
      <SiteFooter />
    </>
  );
}
