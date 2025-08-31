import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

// Dynamic icon imports (below-the-fold optimization)
const SearchIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Search })));
const ZapIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Zap })));
const CheckCircleIcon = lazy(() => import("lucide-react").then(m => ({ default: m.CheckCircle })));

const steps = [
  {
  icon: SearchIcon,
    title: "Enter Book Title",
    description:
      "Simply type in any book title you want to learn from. Our AI recognizes thousands of books across all genres.",
  },
  {
  icon: ZapIcon,
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes the book's core concepts and extracts the most actionable insights in seconds.",
  },
  {
  icon: CheckCircleIcon,
    title: "Get 5 Action Steps",
    description:
      "Receive a curated list of 5 practical steps you can implement immediately to apply the book's wisdom.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section-spacing bg-background relative"
    >
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="hairline-gradient" />
      </div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fluid-title font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-primary/40 mb-5">
            How Praxis Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform any book into actionable insights in three simple steps
          </p>
        </div>

        <ol
          className="grid md:grid-cols-3 gap-8 counter-reset-steps"
          aria-label="Three simple steps explaining how Praxis works"
        >
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="relative group"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(28)}
            >
              <div className="h-full rounded-2xl border bg-card/30 backdrop-blur-sm p-8 flex flex-col items-center text-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/40 group-hover:bg-card/50 interactive-scale">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-2xl shadow-md ring-4 ring-background">
                  {index + 1}
                </div>
                <div className="mt-10 mb-6 w-20 h-20 rounded-2xl bg-accent/70 flex items-center justify-center shadow-inner">
                  <Suspense fallback={<div className="h-10 w-10" />}>
                    <step.icon className="h-10 w-10 text-primary" />
                  </Suspense>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    <span className="sr-only">Step {index + 1}: </span>Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full translate-y-[-50%]">
                  <div className="h-px bg-gradient-to-r from-border via-primary/40 to-border w-full transform -translate-x-8"></div>
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
