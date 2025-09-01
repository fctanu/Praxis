import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/praxis.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden ring-1 ring-border/60 group-hover:ring-primary/50 shadow-sm bg-gradient-to-br from-background to-muted/40 transition-all">
            <img
              src={logo}
              alt="Praxis Logo"
              width={56}
              height={56}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent select-none">
            Praxis
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#steps"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Steps
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex"
            onClick={() => navigate("/analyze")}
          >
            Sign In
          </Button>
          <Button variant="default" onClick={() => navigate("/analyze")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
