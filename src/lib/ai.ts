// Temporary AI generation stub. Replace with Gemini API call (Task 2.x) later.
export interface AnalysisStep {
  title: string;
  summary: string;
  detail: string;
}

export async function generateSteps(title: string): Promise<AnalysisStep[]> {
  // Simulate network + processing latency
  await new Promise((r) => setTimeout(r, 900));
  const base = title.trim() || "Your Book";
  return [
    {
      title: "Identify Core Thesis",
      summary: `Extract the central argument of "${base}"`,
      detail:
        "Skim introduction and conclusion; write a single concise sentence capturing the thesis. This anchors all later steps.",
    },
    {
      title: "Map Key Pillars",
      summary: "List 3–5 supporting concepts",
      detail:
        "Create a bulleted list of the major supporting ideas. Each pillar should be actionable or measurable.",
    },
    {
      title: "Define One Habit",
      summary: "Choose a repeatable daily / weekly action",
      detail:
        "Transform an abstract idea into a habit with trigger, routine, reward pattern. Track it for 14 days.",
    },
    {
      title: "Set a 30-Day Experiment",
      summary: "Run a time‑boxed practical application",
      detail:
        "Design a small experiment implementing a pillar. Write hypothesis, metrics, and review criteria.",
    },
    {
      title: "Reflect & Iterate",
      summary: "Capture outcomes and refine system",
      detail:
        "At day 30, journal what worked, what lagged, and choose one refinement to start next cycle.",
    },
  ];
}

// TODO (Task 2.x): Implement server proxy or edge function to call Gemini securely.
