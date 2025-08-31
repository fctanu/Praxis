import { Search, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter Book Title",
    description: "Simply type in any book title you want to learn from. Our AI recognizes thousands of books across all genres."
  },
  {
    icon: Zap,
    title: "AI Analysis", 
    description: "Our advanced AI analyzes the book's core concepts and extracts the most actionable insights in seconds."
  },
  {
    icon: CheckCircle,
    title: "Get 5 Action Steps",
    description: "Receive a curated list of 5 practical steps you can implement immediately to apply the book's wisdom."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Praxis Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform any book into actionable insights in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <div className="h-px bg-border w-full transform -translate-x-8"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;