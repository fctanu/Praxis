import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ListChecks } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-70 mix-blend-normal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,hsl(var(--primary)/0.08),transparent)]" />
      </div>
      <div className="container section-spacing relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="fluid-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/60">
                Turn Any Book Into
                <span className="block bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                  5 Action Steps
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transform knowledge into action. Get practical, implementable
                steps from any book title in seconds with AI-powered insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-8 interactive-scale elevation-soft"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 interactive-scale"
              >
                See How It Works
              </Button>
            </div>
            <div className="flex items-center flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>1000+ books analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary" />
                <span>5 actionable steps each</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={heroImage}
              alt="Books transforming into actionable steps"
              className="w-full h-auto rounded-3xl elevation-lg transition-transform duration-500 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="hairline-gradient" />
    </section>
  );
};

export default Hero;
