import React, { Suspense, lazy, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero"; // keep hero eager (above the fold)
const StepsImport = () => import("@/components/Steps");
const FeaturesImport = () => import("@/components/Features");
const PricingImport = () => import("@/components/Pricing");
const FooterImport = () => import("@/components/Footer");

const Steps = lazy(StepsImport);
const Features = lazy(FeaturesImport);
const Pricing = lazy(PricingImport);
const Footer = lazy(FooterImport);

// Prefetch hook using IntersectionObserver to start loading chunks slightly before they enter viewport
function usePrefetch(
  ref: React.RefObject<HTMLElement | null>,
  importer: () => Promise<unknown>
) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const el = ref.current;
    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!triggered && entry.isIntersecting) {
            triggered = true;
            importer(); // start fetching chunk
            observer.disconnect();
          }
        });
      },
      {
        // start prefetch when section is within 600px below viewport
        root: null,
        rootMargin: "600px 0px",
        threshold: 0.01,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, importer]);
}

const Index = () => {
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  usePrefetch(stepsRef, StepsImport);
  usePrefetch(featuresRef, FeaturesImport);
  usePrefetch(pricingRef, PricingImport);
  usePrefetch(footerRef, FooterImport);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="py-24 text-center text-muted-foreground">
              Loading features…
            </div>
          }
        >
          <div ref={featuresRef}>
            <Features />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className="py-24 text-center text-muted-foreground">
              Loading steps…
            </div>
          }
        >
          <div ref={stepsRef}>
            <Steps />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className="py-24 text-center text-muted-foreground">
              Loading pricing…
            </div>
          }
        >
          <div ref={pricingRef}>
            <Pricing />
          </div>
        </Suspense>
      </main>
      <Suspense
        fallback={
          <div className="py-12 text-center text-muted-foreground">
            Loading footer…
          </div>
        }
      >
        <div ref={footerRef}>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
