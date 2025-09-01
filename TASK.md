# Task Tracker

1. Authentication & Backend Setup
   1.1 [ ] Create Supabase project & add env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
   1.2 [ ] Add Supabase client module (`src/lib/supabase.ts`)
   1.3 [ ] Decide auth method (email+password) and enable in Supabase
   1.4 [ ] Build `Login` page with form + validation (zod)
   1.5 [ ] Implement protected route/layout wrapper (redirect if not authed)
   1.6 [ ] Add logout action in UI

2. Gemini AI Integration
   2.1 [ ] Add `GEMINI_API_KEY` secret (NOT exposed to client)
   2.2 [ ] Create Supabase Edge Function (or lightweight backend proxy) to call Gemini API
   2.3 [ ] Define request schema: `{ title: string }`
   2.4 [ ] Define response schema: `{ steps: Array<{ title: string; summary: string; detail: string }> }`
   2.5 [ ] Implement error handling + timeout + basic retry (e.g., 1 retry on 5xx)
   2.6 [ ] Validate inputs server-side (length / profanity guard optional)

3. Analysis Page UI (`/app/analyze`)
   3.1 [x] Create route & layout (auth gating pending)
   3.2 [ ] Book title input form with zod validation & submit (form present, max length 100 enforced, zod pending)
   3.3 [x] Loading state while generating (button state text)
   3.4 [x] Render steps as accordion (summary + detail)
   3.5 [x] Add Expand All / Collapse All controls
   3.6 [ ] Show error toast on failure (retry option) (inline error only)
   3.7 [x] Wire marketing & header buttons to /analyze route
   3.8 [x] Add quick-select book title suggestions (click to autofill input)
   3.9 [x] Style suggestions as responsive grid cards & add "Start With Why"

4. Data Persistence (Library)
   4.1 [ ] Create `analyses` table (id, user_id, title, steps JSON, created_at)
   4.2 [ ] Enable Row Level Security on table
   4.3 [ ] RLS Policy: user can CRUD only own rows
   4.4 [ ] Save button persists current analysis
   4.5 [ ] Prevent duplicate save (disable button if already saved)
   4.6 [ ] Add `updated_at` trigger (optional)

5. Library Page (`/app/library`)
   5.1 [ ] Route & list saved analyses (title, created_at)
   5.2 [ ] Client-side pagination or infinite scroll (React Query)
   5.3 [ ] View details page / modal for a saved analysis
   5.4 [ ] Delete entry with confirm dialog
   5.5 [ ] Empty state + skeleton loading

6. Sidebar / App Layout
   6.1 [ ] Implement left sidebar with links: Analyze, Library, (Logout)
   6.2 [ ] Active link styling (aria-current)
   6.3 [ ] Mobile responsive collapse / drawer
   6.4 [ ] Keyboard accessible navigation

7. State & Caching
   7.1 [ ] React Query keys: `['analysis', title]`, `['library', page]`
   7.2 [ ] Cache last analysis result locally (to prevent loss on navigation)
   7.3 [ ] Invalidate library query after save/delete
   7.4 [ ] Handle duplicate in-flight requests (abort previous)

8. Security & API Hardening
   8.1 [ ] Do NOT expose Gemini key in client bundle
   8.2 [ ] Edge function checks auth JWT
   8.3 [ ] Rate limiting (basic per-user count in table or KV cache)
   8.4 [ ] Input sanitization / length limits (title <= 140 chars)
   8.5 [ ] Log errors (structured) in Edge function

9. UX & Edge Cases
   9.1 [ ] Validate non-empty title; trim whitespace
   9.2 [ ] Show friendly message if Gemini returns no meaningful steps
   9.3 [ ] Handle network offline (navigator.onLine check)
   9.4 [ ] Graceful timeout message (>30s)
   9.5 [ ] Accessible accordion semantics (ARIA roles)

10. Testing
    10.1 [ ] Unit: supabase client wrapper (mock fetch)
    10.2 [ ] Unit: Gemini response normalizer
    10.3 [ ] Integration: analyze flow (mock Edge function)
    10.4 [ ] Integration: save & list library items
    10.5 [ ] E2E (future) script outline

11. Documentation
    11.1 [ ] Update README with environment setup & scripts
    11.2 [ ] Add `.env.example` with required vars
    11.3 [ ] Add architectural overview section (auth + edge + client flow)
    11.4 [ ] Document RLS policies & schema

12. Performance
    12.1 [ ] Lazy load Library page route chunk
    12.2 [ ] Add request debounce (250ms) if future live suggestions
    12.3 [ ] Preload Edge function on login (warm start)

13. Future (Backlog)
    13.1 [ ] Tagging / categorizing saved analyses
    13.2 [ ] Shareable link (public read if toggled)
    13.3 [ ] Step editing & notes per step

---

Usage: Mark tasks with `[x]` when completed. Keep numbering stable; append new tasks with new decimal numbers rather than renumbering existing ones.
