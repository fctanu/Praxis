import { Card } from "@/components/ui/card";
import { Clock, Brain, Target, Users, Bookmark, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get actionable steps in seconds, not hours of reading and note-taking."
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced AI extracts the most valuable insights from complex concepts."
  },
  {
    icon: Target,
    title: "Action-Focused",
    description: "Every step is designed to be immediately implementable in your life."
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Benefit from collective wisdom of thousands of book summaries."
  },
  {
    icon: Bookmark,
    title: "Save & Organize",
    description: "Keep track of all your action steps in one organized dashboard."
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your implementation progress and build lasting habits."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Praxis?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fastest way to turn knowledge into action with AI-powered book insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 space-y-4 border-border bg-card hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;