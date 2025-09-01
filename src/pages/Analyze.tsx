import { useState } from "react";
import { generateSteps, type AnalysisStep } from "@/lib/ai";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GeneratedState {
  title: string;
  steps: AnalysisStep[];
}

const Analyze = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<GeneratedState | null>(null);
  const [expandedAll, setExpandedAll] = useState(false);

  const MAX_LEN = 100;
  const canSubmit =
    bookTitle.trim().length > 0 && bookTitle.length <= MAX_LEN && !loading;

  const suggestions = [
    "48 Laws of Power",
    "Who Moved My Cheese",
    "The Infinite Game",
    "Meditations",
    "The 4-Hour Workweek",
    "Start With Why",
  ];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const steps = await generateSteps(bookTitle);
      setData({ title: bookTitle.trim(), steps });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  const accordionValue =
    expandedAll && data?.steps
      ? data.steps.map((_, i) => `step-${i}`)
      : undefined;

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "none",
      }}
    >
      {/* Simple left sidebar placeholder (library button) */}
      <aside className="w-52 border-r bg-background/60 backdrop-blur-sm p-4 hidden md:flex flex-col gap-4">
        <div className="text-sm font-semibold tracking-wide text-muted-foreground">
          Navigation
        </div>
        <Button variant="ghost" className="justify-start" disabled>
          Library (soon)
        </Button>
      </aside>
      <main className="flex-1 py-10">
        <div className="mx-auto w-full max-w-4xl px-6 space-y-10">
          <header className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
              Analyze a Book
            </h1>
            <p className="text-muted-foreground">
              Enter a book title to generate 5 actionable steps. (AI backend
              coming next.)
            </p>
          </header>
          <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-2xl">
            <div className="space-y-3">
              <h2 className="text-sm font-medium tracking-wide text-muted-foreground text-center sm:text-left">
                Popular Titles
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {suggestions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setBookTitle(s)}
                    className="group relative w-full text-left rounded-xl border bg-white/70 dark:bg-background/70 p-4 shadow-sm hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-primary/40"
                  >
                    <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {s}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-border group-hover:ring-primary/40" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="e.g. Atomic Habits"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                aria-label="Book title"
                maxLength={MAX_LEN}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={!canSubmit}
                variant="cta"
                className="sm:w-auto w-full h-11"
              >
                {loading ? "Generating…" : "Generate Steps"}
              </Button>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span>
                {bookTitle.length}/{MAX_LEN} characters
              </span>
              {bookTitle.length === MAX_LEN && (
                <span className="text-amber-600 dark:text-amber-400">
                  Limit reached
                </span>
              )}
            </div>
          </form>
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 px-4 py-2 rounded-md max-w-xl">
              {error}
            </div>
          )}
          {!data && !loading && !error && (
            <div className="text-sm text-muted-foreground max-w-xl pt-4">
              Enter a book title above or pick one of the suggestions to
              generate actionable steps.
            </div>
          )}
          {data && (
            <section className="space-y-6" aria-live="polite">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-semibold">
                  Results for:{" "}
                  <span className="text-primary">{data.title}</span>
                </h2>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedAll((v) => !v)}
                  >
                    {expandedAll ? "Collapse All" : "Expand All"}
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        disabled
                        title="Save coming soon"
                      >
                        Save
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Save to your library (coming soon)
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <Accordion
                type="multiple"
                value={accordionValue}
                className="space-y-2"
              >
                {data.steps.map((s, i) => (
                  <AccordionItem key={i} value={`step-${i}`}>
                    <AccordionTrigger>
                      <div className="text-left">
                        <div className="font-medium">
                          Step {i + 1}: {s.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {s.summary}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-sm text-muted-foreground whitespace-pre-line">
                        {s.detail}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analyze;
