import { Card } from "@/components/ui/card";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ClockIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Clock })));
const BrainIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Brain })));
const TargetIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Target })));
const UsersIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Users })));
const BookmarkIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Bookmark })));
const TrendingUpIcon = lazy(() => import("lucide-react").then(m => ({ default: m.TrendingUp })));

const features = [
  {
  icon: ClockIcon,
    title: "Instant Results",
    description:
      "Get actionable steps in seconds, not hours of reading and note-taking.",
  },
  {
  icon: BrainIcon,
    title: "AI-Powered Analysis",
    description:
      "Advanced AI extracts the most valuable insights from complex concepts.",
  },
  {
  icon: TargetIcon,
    title: "Action-Focused",
    description:
      "Every step is designed to be immediately implementable in your life.",
  },
  {
  icon: UsersIcon,
    title: "Community Insights",
    description:
      "Benefit from collective wisdom of thousands of book summaries.",
  },
  {
  icon: BookmarkIcon,
    title: "Save & Organize",
    description:
      "Keep track of all your action steps in one organized dashboard.",
  },
  {
  icon: TrendingUpIcon,
    title: "Track Progress",
    description:
      "Monitor your implementation progress and build lasting habits.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="hairline-gradient" />
      </div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fluid-title font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-primary/40 mb-5">
            Why Choose Praxis?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fastest way to turn knowledge into action with AI-powered book
            insights
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(24, 0.55)}
            >
              <Card className="p-6 space-y-4 border-border bg-card/70 backdrop-blur-sm hover:shadow-medium transition-all duration-300 interactive-scale">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-inner">
                  <Suspense fallback={<div className="h-6 w-6" />}>
                    <feature.icon className="h-6 w-6 text-primary" />
                  </Suspense>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
