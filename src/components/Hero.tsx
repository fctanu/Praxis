import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ListChecks } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Turn Any Book Into
                <span className="text-primary block">5 Action Steps</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transform knowledge into action. Get practical, implementable steps from any book title in seconds with AI-powered insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>1000+ books analyzed</span>
              </div>
              <div className="flex items-center space-x-2">
                <ListChecks className="h-4 w-4 text-primary" />
                <span>5 actionable steps each</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Books transforming into actionable steps"
              className="w-full h-auto rounded-2xl shadow-large"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;