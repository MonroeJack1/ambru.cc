import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Database,
  Gauge,
  LineChart,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

import { HeroVisual } from "@/components/site/hero-visual";
import { SectionHeader } from "@/components/site/section-header";
import { SiteNav } from "@/components/site/site-nav";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const capabilityBadges = [
  "Marketing Strategy",
  "AI Coaching",
  "Market Research",
  "Business Consulting",
  "Sales Systems",
  "Daily Task Automation",
  "Statistics",
  "Project Implementation",
];

const problems = [
  "Too many tools, not enough strategy.",
  "Marketing decisions based on assumptions.",
  "AI used randomly instead of systematically.",
  "Sales processes without clear optimization.",
  "Daily tasks that could be automated.",
];

const solutions = [
  {
    title: "Understand the Market",
    description:
      "Market research, competitor analysis, statistics and customer insights translated into practical business direction.",
    icon: Search,
    accent: "sky",
  },
  {
    title: "Build the Strategy",
    description:
      "Marketing strategy, business strategy, sales strategy and positioning designed to make decisions sharper and execution clearer.",
    icon: Target,
    accent: "violet",
  },
  {
    title: "Automate and Scale",
    description:
      "AI workflows, daily task automation, coaching and implementation support for systems that keep improving.",
    icon: Workflow,
    accent: "emerald",
  },
];

const services = [
  {
    title: "AI Coaching",
    description:
      "Build practical AI capability for founders and teams through clear use cases, workflows and prompt systems.",
    icon: BrainCircuit,
  },
  {
    title: "Marketing Coaching",
    description:
      "Improve campaign thinking, positioning, content direction and marketing decision quality with strategic guidance.",
    icon: MessageSquare,
  },
  {
    title: "Business Strategy Consulting",
    description:
      "Clarify your growth model, priorities, execution rhythm and the systems needed to move faster with less noise.",
    icon: ClipboardList,
  },
  {
    title: "Market Research & Statistics",
    description:
      "Turn market signals, customer data, competitor moves and statistical thinking into usable business intelligence.",
    icon: BarChart3,
  },
  {
    title: "Sales Strategy",
    description:
      "Optimize offers, funnel logic, sales processes and conversion points to create cleaner revenue movement.",
    icon: LineChart,
  },
  {
    title: "AI Automation Systems",
    description:
      "Design daily task automations, research assistants, reporting workflows and internal productivity systems.",
    icon: Bot,
  },
  {
    title: "Marketing Project Implementation",
    description:
      "Move from strategy to shipped campaigns, research assets, automation workflows and operating playbooks.",
    icon: Cpu,
  },
];

const projects = [
  {
    title: "AI-Powered Marketing Research System",
    challenge: "Research was slow, scattered and difficult to translate into marketing decisions.",
    approach: "Designed an AI-assisted research workflow for customer signals, competitor tracking and insight summaries.",
    impact: "Faster research cycles, clearer campaign inputs and stronger strategic alignment.",
    tools: ["AI workflows", "Market research", "Statistics", "Dashboards"],
  },
  {
    title: "Sales Strategy Optimization",
    challenge: "The sales process had unclear stages, weak prioritization and inconsistent follow-up logic.",
    approach: "Mapped conversion points, reframed the offer and built a clearer pipeline optimization system.",
    impact: "Sharper sales focus, better follow-up discipline and clearer performance visibility.",
    tools: ["Sales systems", "CRM logic", "Positioning", "Analytics"],
  },
  {
    title: "Business Automation Blueprint",
    challenge: "Daily operational tasks were consuming time that should have gone into growth and client work.",
    approach: "Audited recurring work, prioritized automation opportunities and documented scalable AI workflows.",
    impact: "Less manual repetition, faster execution and a practical roadmap for automation.",
    tools: ["Automation", "AI agents", "Process design", "SOPs"],
  },
  {
    title: "Market Opportunity Analysis",
    challenge: "A new growth direction needed validation before investing time, budget and campaign energy.",
    approach: "Analyzed market demand, competitors, audience segments and strategic positioning options.",
    impact: "More confident decision-making, clearer opportunity sizing and better market entry planning.",
    tools: ["Market sizing", "Competitor analysis", "Research", "Strategy"],
  },
];

const coachingTracks = [
  {
    title: "AI for Business Productivity",
    description:
      "Use AI to reduce repetitive work, improve planning and build daily systems that support better execution.",
    icon: Zap,
  },
  {
    title: "AI for Marketing and Content",
    description:
      "Create research-backed content systems, campaign planning workflows and brand-consistent AI support.",
    icon: Sparkles,
  },
  {
    title: "AI for Research, Strategy and Decision-Making",
    description:
      "Use AI, data and structured thinking to evaluate markets, customers, competitors and business moves.",
    icon: Database,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Clarify the business context, current blockers, goals, systems and decision gaps.",
  },
  {
    number: "02",
    title: "Research",
    description: "Gather market, customer, competitor and internal signals to build a useful intelligence base.",
  },
  {
    number: "03",
    title: "Strategize",
    description: "Turn the research into focused priorities, strategic direction and practical growth options.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Build campaigns, workflows, automation systems, playbooks and project assets that can be used.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Review performance, improve the system and create a smarter operating rhythm over time.",
  },
];

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-50">
      <div className="noise-layer" aria-hidden="true" />
      <SiteNav />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <Badge variant="default" className="mb-6">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Personal strategy studio for AI-enabled growth
          </Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            AI, Marketing and Market Intelligence for Businesses Ready to Grow Smarter.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-400 sm:text-xl">
            AMBRU.CC helps founders, teams and companies use AI, statistics, automation and strategic marketing to improve decisions, build better campaigns and unlock new growth opportunities.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonVariants({ size: "lg" })}>
              Book a Strategy Call
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#services" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Explore Services
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {[
              ["AI", "systems"],
              ["Market", "clarity"],
              ["Growth", "execution"],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
                <div className="font-mono text-lg font-semibold text-white">{label}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{detail}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] py-4 backdrop-blur-xl" aria-label="Capabilities">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
          {capabilityBadges.map((badge) => (
            <Badge key={badge} variant="muted" className="shrink-0 py-2 text-slate-300">
              {badge}
            </Badge>
          ))}
        </div>
      </section>

      <section className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="problem-title">
        <SectionHeader
          eyebrow="The clarity gap"
          title="Most businesses collect data, use tools and run campaigns — but still lack clarity."
          description="Growth gets harder when systems, data, marketing, sales and AI tools are disconnected. The result is activity without enough strategic signal."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((problem, index) => (
            <ProblemCard key={problem} problem={problem} index={index} />
          ))}
        </div>
      </section>

      <section id="market-research" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="solution-title">
        <SectionHeader
          eyebrow="Strategy system"
          badgeVariant="violet"
          title="AMBRU.CC connects strategy, data and AI into practical business systems."
          description="The work starts with understanding the market, then moves into strategy and practical implementation that founders and teams can actually use."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </section>

      <section id="services" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="services-title">
        <SectionHeader
          eyebrow="Services"
          title="Services designed for smarter decisions and faster execution."
          description="A focused consulting stack for AI adoption, marketing strategy, market intelligence, automation and project implementation."
        />
        <div className="grid auto-rows-[minmax(16rem,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} featured={index === 2 || index === 3} />
          ))}
        </div>
      </section>

      <section id="projects" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="projects-title">
        <SectionHeader
          eyebrow="Selected work themes"
          badgeVariant="success"
          title="Featured Strategic Projects"
          description="Project examples are framed as strategic implementation patterns: clear problem, structured approach and practical expected impact."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="coaching" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="coaching-title">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Coaching"
            badgeVariant="violet"
            title="Learn to use AI and marketing like a strategic operator, not just a tool user."
            description="Coaching is built for people who want practical AI fluency, better marketing thinking and stronger research-driven decisions."
          >
            <div className="mt-8">
              <a href="#contact" className={buttonVariants({ variant: "violet", size: "lg" })}>
                Start Coaching
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {coachingTracks.map((track) => (
              <TrackCard key={track.title} {...track} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="process-title">
        <SectionHeader
          eyebrow="Process"
          title="How We Work"
          description="A clear operating rhythm for turning business ambiguity into focused research, strategy, implementation and optimization."
        />
        <div className="relative grid gap-4 lg:grid-cols-5">
          <div className="absolute left-6 right-6 top-12 hidden h-px bg-gradient-to-r from-sky-300/0 via-sky-300/40 to-violet-400/0 lg:block" aria-hidden="true" />
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </section>

      <section id="about" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="about-title">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge variant="muted">About AMBRU.CC</Badge>
            <h2 id="about-title" className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
              Built by Cosmin Claudiu for people who want clarity, systems and smarter growth.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              AMBRU.CC is the personal consulting and strategy studio of Cosmin Claudiu, focused on the intersection of AI, marketing, statistics, market research and business execution.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Strategy", "Clearer growth decisions"],
                ["Research", "Better market signal"],
                ["Automation", "Smarter daily execution"],
              ].map(([label, detail]) => (
                <Card key={label} className="p-5">
                  <div className="font-semibold text-white">{label}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{detail}</div>
                </Card>
              ))}
            </div>
          </div>
          <FounderCard />
        </div>
      </section>

      <section id="contact" className="section-reveal relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="contact-title">
        <Card className="overflow-hidden rounded-[2.25rem] border-sky-300/20 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(139,92,246,0.10)_44%,rgba(34,197,94,0.08))] p-1 shadow-[0_0_90px_rgba(56,189,248,0.12)]">
          <div className="rounded-[2rem] bg-[#050816]/82 p-8 backdrop-blur-2xl sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge variant="success">Next step</Badge>
                <h2 id="contact-title" className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
                  Ready to turn AI, marketing and data into a practical growth system?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Bring a business challenge, growth question or project idea. AMBRU.CC will help clarify the opportunity, map the system and define the practical next move.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:hello@ambru.cc?subject=Strategy%20Call%20Request%20for%20AMBRU.CC" className={buttonVariants({ size: "lg" })}>
                    Book a Strategy Call
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <a href="mailto:hello@ambru.cc?subject=Project%20Brief%20for%20AMBRU.CC" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                    Send a Project Brief
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-sky-300/10 text-sky-200">
                    <Gauge className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-semibold text-white">Strategy call focus</div>
                    <div className="text-sm text-slate-500">Clarity, systems and implementation path</div>
                  </div>
                </div>
                <Separator className="my-6" />
                <ul className="space-y-4 text-sm leading-6 text-slate-300">
                  {[
                    "What growth decision needs more intelligence?",
                    "Where can AI improve daily execution?",
                    "Which marketing or sales system needs sharper structure?",
                    "What project should move from idea to implementation?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <footer className="relative z-10 mt-20 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="font-mono text-lg font-bold tracking-[0.2em] text-white">AMBRU.CC</div>
            <div className="mt-2 text-sm text-slate-400">Cosmin Claudiu</div>
            <div className="mt-2 text-sm text-slate-500">AI • Marketing • Strategy • Research • Automation</div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {[
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Coaching", "#coaching"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-3 py-2 transition hover:bg-white/[0.05] hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-xs text-slate-600">
          © {new Date().getFullYear()} AMBRU.CC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

type IconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function ProblemCard({ problem, index }: { problem: string; index: number }) {
  return (
    <Card className="glow-border group min-h-44 overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
      <div className="font-mono text-xs text-sky-300/80">0{index + 1}</div>
      <p className="mt-8 text-lg font-semibold leading-7 tracking-[-0.03em] text-white">{problem}</p>
      <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-sky-300 to-violet-400 opacity-60 transition group-hover:w-24 group-hover:opacity-100" />
    </Card>
  );
}

function SolutionCard({ title, description, icon: Icon, accent }: IconCardProps & { accent: "sky" | "violet" | "emerald" }) {
  const accentClasses = {
    sky: "bg-sky-300/10 text-sky-200 shadow-[0_0_35px_rgba(56,189,248,0.13)]",
    violet: "bg-violet-400/10 text-violet-200 shadow-[0_0_35px_rgba(139,92,246,0.13)]",
    emerald: "bg-emerald-400/10 text-emerald-200 shadow-[0_0_35px_rgba(34,197,94,0.12)]",
  }[accent];

  return (
    <Card className="glow-border overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
      <span className={cn("grid size-14 place-items-center rounded-2xl", accentClasses)}>
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.045em] text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
    </Card>
  );
}

function ServiceCard({ title, description, icon: Icon, featured }: IconCardProps & { featured?: boolean }) {
  return (
    <Card
      className={cn(
        "glow-border group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]",
        featured && "md:col-span-2",
      )}
    >
      <div className="absolute -right-16 -top-16 size-40 rounded-full bg-sky-300/10 blur-3xl transition group-hover:bg-violet-400/15" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-200 transition group-hover:border-sky-300/35 group-hover:bg-sky-300/10">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-7 text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
        <p className="mt-4 grow text-sm leading-7 text-slate-400">{description}</p>
        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-sky-200">
          Explore service
          <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Card>
  );
}

function ProjectCard({
  title,
  challenge,
  approach,
  impact,
  tools,
}: {
  title: string;
  challenge: string;
  approach: string;
  impact: string;
  tools: string[];
}) {
  return (
    <Card className="glow-border overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
      <CardHeader>
        <div className="flex items-start justify-between gap-5">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-3">Strategic project pattern for practical growth execution.</CardDescription>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-400/10 text-violet-200">
            <ClipboardList className="size-5" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          <ProjectColumn label="Challenge" text={challenge} />
          <ProjectColumn label="Approach" text={approach} />
          <ProjectColumn label="Expected Impact" text={impact} />
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="muted">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectColumn({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-sky-300/80">{label}</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function TrackCard({ title, description, icon: Icon }: IconCardProps) {
  return (
    <Card className="glow-border grid gap-5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065] sm:grid-cols-[auto_1fr]">
      <span className="grid size-12 place-items-center rounded-2xl bg-sky-300/10 text-sky-200">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.035em] text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </Card>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Card className="relative p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
      <div className="relative z-10 grid size-14 place-items-center rounded-2xl border border-sky-300/20 bg-[#050816] font-mono text-sm font-semibold text-sky-200 shadow-[0_0_35px_rgba(56,189,248,0.18)]">
        {number}
      </div>
      <h3 className="mt-7 text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}

function FounderCard() {
  return (
    <Card className="relative overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_32%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid aspect-square max-w-sm place-items-center rounded-[2.25rem] border border-white/10 bg-white/[0.04]">
        <div className="absolute inset-8 rounded-full border border-dashed border-sky-300/20" aria-hidden="true" />
        <div className="absolute inset-16 rounded-full border border-violet-300/20 bg-violet-400/5 blur-sm" aria-hidden="true" />
        <div className="grid size-32 place-items-center rounded-[2rem] border border-sky-300/25 bg-[#050816]/70 shadow-[0_0_70px_rgba(56,189,248,0.18)] backdrop-blur-xl">
          <span className="font-mono text-4xl font-bold tracking-[-0.08em] text-white">CC</span>
        </div>
      </div>
      <div className="relative z-10 mt-7 rounded-[1.5rem] border border-white/10 bg-[#050816]/60 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">Founder mark</div>
            <div className="mt-1 font-semibold text-white">Cosmin Claudiu</div>
          </div>
          <Badge variant="default">AMBRU.CC</Badge>
        </div>
      </div>
    </Card>
  );
}
