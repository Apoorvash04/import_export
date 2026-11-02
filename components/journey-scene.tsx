"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};
const range = (value: number, start: number, end: number) => smooth((value - start) / (end - start));
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress;

export function JourneyScene() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = rootRef.current;
    if (!scene) return;

    const globe = scene.querySelector<HTMLElement>(".globe-world");
    const earth = scene.querySelector<HTMLElement>(".earth-art");
    const port = scene.querySelector<HTMLElement>(".port-art");
    const portShade = scene.querySelector<HTMLElement>(".port-shade");
    const intro = scene.querySelector<HTMLElement>(".intro-copy");
    const india = scene.querySelector<HTMLElement>(".india-copy");
    const routeLayer = scene.querySelector<HTMLElement>(".routes");
    const cityPin = scene.querySelector<HTMLElement>(".city-pin");
    const containerStage = scene.querySelector<HTMLElement>(".container-stage");
    const cargoCopy = scene.querySelector<HTMLElement>(".cargo-copy");
    const endFrame = scene.querySelector<HTMLElement>(".end-frame");
    const progressBar = scene.querySelector<HTMLElement>(".journey-progress > span");
    const currentCount = scene.querySelector<HTMLElement>(".count-current");
    const cargoCards = [...scene.querySelectorAll<HTMLElement>(".cargo")];
    const routePaths = [...scene.querySelectorAll<SVGPathElement>(".route")];
    const routeDots = [...scene.querySelectorAll<SVGCircleElement>(".route-dot")];
    const destinations = [...scene.querySelectorAll<HTMLElement>(".destination-label")];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    function paint() {
      const availableScroll = scene!.offsetHeight - window.innerHeight;
      const scrollProgress = prefersReducedMotion ? 1 : clamp(-scene!.getBoundingClientRect().top / Math.max(1, availableScroll));
      const zoom = range(scrollProgress, 0.025, 0.55);
      const globeZoom = range(scrollProgress, 0.04, 0.4);
      const land = range(scrollProgress, 0.45, 0.72);
      const cargo = range(scrollProgress, 0.47, 0.84);
      const finale = range(scrollProgress, 0.79, 0.92);

      if (globe) {
        globe.style.transform = `translate(-14vw, 0) scale(${mix(1, 2.35, globeZoom)})`;
        globe.style.opacity = String(1 - range(scrollProgress, 0.14, 0.34));
      }
      if (earth) {
        const offset = window.innerWidth < 760 ? "20vw, 8vh" : "19vw, 8vh";
        earth.style.transform = `translate(${offset}) scale(${mix(1, 3.6, zoom)})`;
        earth.style.opacity = String(range(scrollProgress, 0.14, 0.34) * (1 - range(scrollProgress, 0.43, 0.66)));
      }
      if (port) {
        port.style.opacity = String(land);
        port.style.transform = `scale(${mix(1.08, 1, land)})`;
      }
      if (portShade) portShade.style.opacity = String(land);
      if (routeLayer) routeLayer.style.opacity = String(1 - range(scrollProgress, 0.33, 0.47));
      routePaths.forEach((path, index) => {
        path.style.strokeDashoffset = String(240 * (1 - range(scrollProgress, 0.11 + index * 0.035, 0.32 + index * 0.035)));
      });
      routeDots.forEach((dot, index) => {
        dot.style.opacity = String(range(scrollProgress, 0.25 + index * 0.025, 0.34 + index * 0.025));
      });
      if (cityPin) cityPin.style.opacity = String(range(scrollProgress, 0.19, 0.27) * (1 - range(scrollProgress, 0.51, 0.59)));
      destinations.forEach((label, index) => {
        const show = range(scrollProgress, 0.13 + index * 0.035, 0.22 + index * 0.035);
        label.style.opacity = String(show * (1 - range(scrollProgress, 0.33, 0.39)));
        label.style.transform = `translateY(${mix(8, 0, show)}px)`;
      });
      if (intro) {
        intro.style.opacity = String(1 - range(scrollProgress, 0.13, 0.23));
        intro.style.transform = `translateY(${mix(0, -32, range(scrollProgress, 0.06, 0.24))}px)`;
      }
      if (india) {
        india.style.opacity = String(range(scrollProgress, 0.24, 0.33) * (1 - range(scrollProgress, 0.47, 0.55)));
        india.style.transform = `translateY(${mix(25, 0, range(scrollProgress, 0.24, 0.35))}px)`;
      }
      if (containerStage) containerStage.style.opacity = String(cargo * (1 - finale));
      cargoCards.forEach((card, index) => {
        const reveal = range(scrollProgress, 0.46 + index * 0.065, 0.57 + index * 0.065);
        card.style.opacity = String(reveal * (1 - finale));
        card.style.transform = `translateY(${mix(150, 0, reveal)}px) scale(${mix(0.78, 1, reveal)})`;
      });
      if (cargoCopy) {
        cargoCopy.style.opacity = String(range(scrollProgress, 0.52, 0.62) * (1 - range(scrollProgress, 0.76, 0.84)));
        cargoCopy.style.transform = `translateY(${mix(25, 0, range(scrollProgress, 0.52, 0.64))}px)`;
      }
      if (endFrame) {
        endFrame.style.opacity = String(finale);
        endFrame.style.transform = `translateY(${mix(22, 0, finale)}px)`;
        endFrame.style.pointerEvents = finale > 0.95 ? "auto" : "none";
      }
      if (progressBar) progressBar.style.width = `${scrollProgress * 100}%`;
      if (currentCount) currentCount.textContent = scrollProgress < 0.24 ? "01" : scrollProgress < 0.49 ? "02" : scrollProgress < 0.78 ? "03" : "04";
      frame = 0;
    }

    function schedulePaint() {
      if (!frame) frame = window.requestAnimationFrame(paint);
    }

    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    paint();

    let observer: IntersectionObserver | undefined;
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
      revealElements.forEach((element, index) => element.style.setProperty("--reveal-delay", `${(index % 4) * 95}ms`));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14 });
      revealElements.forEach((element) => observer?.observe(element));
    }

    return () => {
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="journey" id="journey" aria-label="The MEGH export journey" ref={rootRef}>
      <div className="journey-sticky">
        <div className="globe-world" aria-hidden="true">
          <div className="globe-spin">
            <Image className="globe-image" src="/assets/earth-globe.png" alt="" fill priority sizes="100vw" />
          </div>
        </div>
        <Image className="earth-art" src="/assets/earth-orbit.png" alt="Satellite view of India and the Indian Ocean" fill priority sizes="100vw" />
        <div className="earth-vignette"></div>
        <Image className="port-art" src="/assets/port-terminal.png" alt="Cargo ship and colorful shipping containers at a port at sunset" fill sizes="100vw" />
        <div className="port-shade"></div>
        <svg className="routes" viewBox="0 0 1000 650" aria-hidden="true">
          <defs><linearGradient id="routeLine"><stop stopColor="#b1d900" /><stop offset="1" stopColor="#fff" stopOpacity=".2" /></linearGradient></defs>
          <path className="route route-one" d="M500 320 C465 170 360 115 245 145" />
          <path className="route route-two" d="M500 320 C470 210 460 155 455 120" />
          <path className="route route-three" d="M500 320 C600 245 655 190 705 135" />
          <circle className="route-dot dot-one" cx="245" cy="145" r="5" />
          <circle className="route-dot dot-two" cx="455" cy="120" r="5" />
          <circle className="route-dot dot-three" cx="705" cy="135" r="5" />
        </svg>
        <div className="city-pin"><span className="pin-pulse"></span><span>AHMEDABAD, INDIA</span></div>

        <div className="hero-copy intro-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> MEGH OVERSEAS · AHMEDABAD, INDIA</p>
          <h1>Rooted in India.<br /><em>Loved worldwide.</em></h1>
          <p className="hero-sub">A little closer to home. A world closer to flavour.</p>
          <div className="scroll-prompt"><span className="scroll-line"></span> SCROLL TO FOLLOW THE JOURNEY</div>
        </div>
        <div className="hero-copy india-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> ONE HOME. A WORLD OF FLAVOUR.</p>
          <h2>From Ahmedabad,<br /><em>with care.</em></h2>
          <p>Thoughtfully sourced Indian foods, prepared for tables around the world.</p>
        </div>
        <div className="destination-label destination-us"><span className="dest-rule"></span> UNITED STATES</div>
        <div className="destination-label destination-eu"><span className="dest-rule"></span> EUROPE</div>
        <div className="destination-label destination-asia"><span className="dest-rule"></span> ASIA PACIFIC</div>

        <div className="container-stage" aria-hidden="true">
          <div className="cargo cargo-one"><span className="cargo-face"><b>MEGH</b><small>INDIAN PANTRY</small></span><span className="cargo-side"></span></div>
          <div className="cargo cargo-two"><span className="cargo-face"><b>MEGH</b><small>MADE WITH CARE</small></span><span className="cargo-side"></span></div>
          <div className="cargo cargo-three"><span className="cargo-face"><b>MEGH</b><small>READY FOR THE WORLD</small></span><span className="cargo-side"></span></div>
          <div className="cargo-copy"><span className="eyebrow"><span className="eyebrow-dot"></span> CAREFULLY PACKED. READY TO TRAVEL.</span><h2>Good food goes<br />a long way.</h2></div>
        </div>
        <div className="end-frame">
          <div className="end-frame-copy"><span className="eyebrow"><span className="eyebrow-dot"></span> MEGH OVERSEAS · AHMEDABAD</span><h2>Rooted in India.<br /><em>Loved worldwide.</em></h2></div>
          <a className="frame-link" href="#approach">THE WAY WE WORK <span>↓</span></a>
        </div>
        <div className="journey-progress"><span></span></div>
        <div className="journey-count"><span className="count-current">01</span><i></i><span>04</span></div>
      </div>
    </section>
  );
}
