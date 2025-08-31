import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const CheckIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Check })));

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "5 book analyses per month",
      "Basic action steps",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious learners",
    features: [
      "Unlimited book analyses",
      "Advanced action steps",
      "Progress tracking",
      "Priority support",
      "Export to PDF",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Custom integrations",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-spacing bg-background relative">
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="hairline-gradient" />
      </div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fluid-title font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-primary/40 mb-5">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your learning goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(30, 0.6)}
            >
              <Card
                className={`p-6 md:p-8 relative overflow-hidden flex flex-col h-full ${
                  plan.popular
                    ? "border-primary shadow-large bg-accent/60 backdrop-blur-sm"
                    : "border-border bg-card/80 backdrop-blur"
                } interactive-scale`}
              >
                {/* Badge spacer ensures equal vertical offset across cards */}
                <div className="h-7 mb-2 flex items-center justify-center">
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-medium shadow-sm tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="text-center space-y-2 mb-4 px-2">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {plan.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-card-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-6 px-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Suspense fallback={<div className="h-5 w-5" />}>
                        <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                      </Suspense>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button
                    variant={plan.popular ? "cta" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
