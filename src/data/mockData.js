// Mock data is intentionally centralized here so future API or BI-platform data
// can replace these arrays without rewriting the presentation components.
export const executiveMetrics = [
  {
    label: "Enterprise AI Adoption Index",
    value: "67/100",
    detail: "Up 8 points over the last 6 weeks",
    progress: 67,
    tone: "accent"
  },
  {
    label: "Weekly Active AI Users",
    value: "4,820",
    detail: "61% of eligible workforce"
  },
  {
    label: "AI-Enabled Hours",
    value: "27%",
    detail: "Goal: 40% by year end",
    progress: 68
  },
  {
    label: "Power Users",
    value: "412 / 500",
    detail: "82% of target cohort",
    progress: 82
  },
  {
    label: "Employees Trained",
    value: "742 / 1,000",
    detail: "258 remaining in phase one",
    progress: 74
  },
  {
    label: "Governance Risk",
    value: "High",
    detail: "Credit forecast above monthly cap",
    tone: "risk"
  }
];

export const adoptionTrend = [
  { week: "W1", index: 52, activeUsers: 3380 },
  { week: "W2", index: 55, activeUsers: 3650 },
  { week: "W3", index: 57, activeUsers: 3890 },
  { week: "W4", index: 61, activeUsers: 4230 },
  { week: "W5", index: 64, activeUsers: 4590 },
  { week: "W6", index: 67, activeUsers: 4820 }
];

export const practiceAdoption = [
  { practice: "Customer", adoption: 78 },
  { practice: "Operations", adoption: 71 },
  { practice: "Technology", adoption: 69 },
  { practice: "Strategy", adoption: 63 },
  { practice: "Corporate", adoption: 55 }
];

export const salesMetrics = [
  { label: "AI-Influenced Pipeline", value: "$118M", detail: "Qualified and active pursuits" },
  { label: "Demo-Led Pursuits", value: "41%", detail: "Using live AI moments with clients", progress: 41 },
  { label: "Cross-Practice Pursuits", value: "33%", detail: "AI-enabled collaboration signal", progress: 33 },
  { label: "Proposal Cycle Reduction", value: "18%", detail: "Average reduction from baseline" },
  { label: "AI-Enabled Win Rate Lift", value: "+9%", detail: "Compared with non-AI pursuits", tone: "success" }
];

export const sellerBehaviors = [
  { behavior: "AI-assisted proposal drafting", adoption: 78, signal: "Embedded" },
  { behavior: "AI-generated client research", adoption: 84, signal: "Strong" },
  { behavior: "AI-generated pursuit strategy", adoption: 51, signal: "Building" },
  { behavior: "Live AI demos", adoption: 38, signal: "Needs sponsorship" }
];

export const salesPipeline = [
  { group: "Strategy", pipeline: 28 },
  { group: "Customer", pipeline: 34 },
  { group: "Technology", pipeline: 31 },
  { group: "Operations", pipeline: 25 }
];

export const deliveryMetrics = [
  { label: "AI-Enabled Delivery Hours", value: "27%", detail: "Toward 40% goal", progress: 68 },
  { label: "Engagements Using AI Workflows", value: "43%", detail: "Active client work with AI patterns", progress: 43 },
  { label: "Reusable Delivery Accelerators", value: "61", detail: "Approved and discoverable" },
  { label: "Delivery Power Users", value: "366", detail: "High-frequency delivery practitioners", tone: "accent" }
];

export const workflowAdoption = [
  { workflow: "Meeting synthesis", adoption: 86 },
  { workflow: "Requirements drafting", adoption: 78 },
  { workflow: "PMO reporting", adoption: 74 },
  { workflow: "Test case generation", adoption: 58 },
  { workflow: "Solution design acceleration", adoption: 52 }
];

export const builderMetrics = [
  { label: "Interested Practitioners", value: "1,120", detail: "Opted into builder pathway" },
  { label: "Learning Path Participants", value: "480", detail: "Currently progressing" },
  { label: "Active Builders", value: "64", detail: "Shipping prototypes this month", tone: "accent" },
  { label: "Scaled Builders", value: "18", detail: "Reusable solutions adopted by teams" },
  { label: "Shared AI Solutions", value: "91", detail: "Published in internal marketplace" },
  { label: "Solutions in Production", value: "23", detail: "Live in practice workflows", tone: "success" }
];

export const builderFunnel = [
  { stage: "Interested practitioners", value: 1120 },
  { stage: "Learning path participants", value: 480 },
  { stage: "Active builders", value: 64 },
  { stage: "Scaled builders", value: 18 },
  { stage: "Solutions in production", value: 23 }
];

export const upskillingMetrics = [
  { label: "Employees Trained", value: "742 / 1,000", detail: "Phase-one goal", progress: 74 },
  { label: "Seller Labs Delivered", value: "11 / 14", detail: "Three labs remaining", progress: 79 },
  { label: "Delivery Labs Delivered", value: "9 / 14", detail: "Five labs remaining", progress: 64 },
  { label: "Aspiring Builder Labs Delivered", value: "3 / 4", detail: "One lab remaining", progress: 75 }
];

export const fluencyByRole = [
  { role: "Engineers", fluency: "Advanced", score: 88 },
  { role: "Consultants", fluency: "Intermediate", score: 66 },
  { role: "Sellers", fluency: "Intermediate", score: 63 },
  { role: "Operations", fluency: "Emerging", score: 42 },
  { role: "Executive leaders", fluency: "Inconsistent", score: 36 }
];

export const championMetrics = [
  { label: "AI Champions", value: "186", detail: "Activated across the firm" },
  { label: "Offices Represented", value: "12", detail: "All major hubs included" },
  { label: "Practices Represented", value: "100%", detail: "Every practice has coverage", tone: "success" },
  { label: "Champion-Led Activations", value: "94", detail: "Sessions and office moments" }
];

export const championInfluence = [
  { dimension: "Local engagement", score: 82 },
  { dimension: "Workflow influence", score: 71 },
  { dimension: "Community participation", score: 89 },
  { dimension: "Practice visibility", score: 68 }
];

export const governanceMetrics = [
  { label: "Monthly Credit Forecast", value: "1.66M", detail: "Forecast exceeds cap", tone: "risk" },
  { label: "Monthly Cap", value: "1.6M", detail: "Current enterprise threshold" },
  { label: "Burn Rate", value: "55.4K/day", detail: "Projected through month end", tone: "risk" },
  { label: "Pro Users", value: "179", detail: "Monitored paid usage" },
  { label: "Codex Users", value: "256", detail: "Engineering and builder population" }
];

export const governanceForecast = [
  { day: "1", actual: 46, cap: 53 },
  { day: "5", actual: 259, cap: 267 },
  { day: "10", actual: 544, cap: 533 },
  { day: "15", actual: 835, cap: 800 },
  { day: "20", actual: 1110, cap: 1067 },
  { day: "25", actual: 1388, cap: 1333 },
  { day: "30", actual: 1660, cap: 1600 }
];

// Workstream operating model content is based only on the 5/4/26 weekly update.
export const workstreamTemplateSections = [
  "What happened this week",
  "Evidence of impact",
  "How this supports AI adoption goals",
  "Next week / upcoming priorities",
  "Risks / help needed",
  "Dependencies",
  "Decisions / support needed",
  "Executive summary"
];

export const workstreamActionMetrics = [
  { label: "Week Ending", value: "5/4/26", detail: "Standardized weekly update cadence" },
  { label: "Overall Status", value: "Green", detail: "Building Momentum", tone: "success" },
  { label: "Workstreams Updated", value: "5", detail: "Individual workstream updates captured" },
  { label: "Priority Actions", value: "9", detail: "Named next-week actions across teams", tone: "accent" },
  { label: "Open Risks", value: "7", detail: "Tooling, learning, hosting, and adoption risks" },
  { label: "Support Asks", value: "6", detail: "Decisions and leadership support needed" }
];

export const workstreamRollup = {
  status: "Building Momentum",
  weekEnding: "5/4/26",
  happened: [
    "AI-enabled sales metrics initiative launched to measure seller AI impact.",
    "Delivery workstreams aligned around identifying scalable AI-enabled workflows.",
    "Intellio Agent MVP moved into production.",
    "Upskilling programs expanded across sellers, delivery, and aspiring builders.",
    "AI Champions program continued scaling through grassroots recruiting and enablement.",
    "Builder Pipeline launched foundational builder infrastructure and community assets."
  ],
  impact: [
    "AI Champions membership increased 57% since pivot on 3/26.",
    "Intellio reporting expanded to include CoDex usage and power-user signals.",
    "Builder Guide, Builder Community, and AI @ West Monroe microsite launched.",
    "Learning labs expanded across seller, delivery, and builder audiences.",
    "Initial AI adoption dashboard work initiated."
  ],
  goals: [
    "Expands AI fluency across the firm",
    "Establishes AI adoption measurement foundations",
    "Builds reusable AI delivery capabilities",
    "Expands grassroots AI advocacy and workflow adoption",
    "Creates scalable enablement infrastructure"
  ],
  priorities: [
    { priority: "Launch AI Store", owners: "Intellio", timing: "This week" },
    { priority: "Expand AI adoption dashboard work", owners: "AI-Enabled Sales", timing: "In progress" },
    { priority: "Launch BEN and ERG Champion recruiting", owners: "AI Champions", timing: "Upcoming" },
    { priority: "Finalize Builder Pipeline adoption plan", owners: "Builder Pipeline", timing: "Upcoming" }
  ],
  risks: [
    "CoDex and AI tooling remain intimidating for non-technical users.",
    "Hosting, API, and CloudPC dependencies remain unresolved.",
    "Low AI for Sellers learning lab enrollment.",
    "Additional analytics and reporting support needed."
  ],
  dependencies: [
    "Builder enablement depends on finalized hosting/API guidance.",
    "AI Store rollout depends on microservices and MCP release work.",
    "Delivery scaling depends on practice lead engagement and prioritization."
  ],
  decisions: [
    "Need guidance on enterprise AI adoption metrics usage.",
    "Need prioritization alignment on enterprise architecture upskilling.",
    "Need leadership support for protected learning time."
  ],
  summary:
    "The AI adoption program continues transitioning from early experimentation toward operational scaling. The strongest momentum areas are AI Champions growth, builder community development, and Intellio production capabilities. Key challenges remain tooling complexity, onboarding friction, and dependency management as adoption scales."
};

export const workstreamUpdates = [
  {
    name: "AI-Enabled Sales",
    leads: "Jessica, Paulina",
    status: "On Track",
    tone: "success",
    summary:
      "The AI-Enabled Sales workstream has started building the measurement foundation for understanding AI impact on seller workflows and adoption.",
    happened: ["Identified initial metrics and hypotheses to capture AI usage impact on selling."],
    impact: [
      "Initial AI adoption dashboard and seller metrics work initiated.",
      "Established foundation for measuring seller AI usage and impact."
    ],
    goals: [
      "Establishes AI adoption measurement capability",
      "Supports AI-enabled commercial workflows",
      "Creates visibility into seller AI usage patterns"
    ],
    priorities: [
      {
        priority: "Pull data and scope initial AI use and impact dashboard",
        owners: "AI-Enabled Sales",
        timing: "In progress"
      }
    ],
    risks: ["None explicitly identified in update."],
    dependencies: ["Depends on AI adoption reporting and data availability."],
    decisions: ["None explicitly identified in update."]
  },
  {
    name: "AI-Enabled Delivery Org-Wide",
    leads: "Paulina",
    status: "In Progress",
    tone: "warning",
    summary:
      "The delivery workstream is beginning to align AI adoption around scalable workflow transformation opportunities and delivery impact measurement.",
    happened: [
      "Established desire to identify 3-5 AI-enabled delivery workflows across WM.",
      "Began bottom-up and top-down evaluation process."
    ],
    impact: [
      "Delivery workflow prioritization effort initiated.",
      "AI adoption reporting being leveraged to track AI tool usage."
    ],
    goals: [
      "Creates scalable delivery transformation opportunities",
      "Aligns AI adoption to delivery workflows",
      "Supports measurable delivery enablement"
    ],
    priorities: [
      {
        priority: "Solicit candidate 3-5 workflows from practice leads",
        owners: "AI-Enabled Delivery",
        timing: "In progress"
      },
      {
        priority: "Develop metrics to track delivery impact",
        owners: "AI-Enabled Delivery",
        timing: "In progress"
      }
    ],
    risks: ["None explicitly identified in update."],
    dependencies: ["Depends on practice lead engagement and AI reporting capabilities."],
    decisions: ["Need prioritization alignment on workflow selection."]
  },
  {
    name: "AI-Enabled Delivery - Intellio/Assets",
    leads: "Reva, Paulina",
    status: "On Track",
    tone: "success",
    summary:
      "The Intellio workstream continues operationalizing reusable AI infrastructure and adoption reporting capabilities while preparing for AI Store launch.",
    happened: [
      "Intellio Agent MVP moved into production.",
      "Continued MCP, microservices, and reusable component work.",
      "Expanded AI adoption reporting capabilities."
    ],
    impact: [
      "Reporting expanded to include CoDex usage, complexity, and power-user signals.",
      "Builder hosting platform and intake process established.",
      "AI Store release preparation underway."
    ],
    goals: [
      "Expands reusable AI infrastructure",
      "Improves AI adoption visibility",
      "Supports scalable AI builder enablement"
    ],
    priorities: [
      { priority: "Launch new AI Store", owners: "Intellio", timing: "This week" },
      { priority: "Expand AI adoption reporting capabilities", owners: "Intellio", timing: "In progress" }
    ],
    risks: [
      "Additional hosting automation needed.",
      "DPA approvals for Anthropic and Gemini remain open."
    ],
    dependencies: ["Depends on hosting, MCP, and release coordination work."],
    decisions: ["Need support for AI usage stats and reporting enhancement."]
  },
  {
    name: "Upskilling",
    leads: "Michele, Victoria, Jen",
    status: "Active Progress",
    tone: "warning",
    summary:
      "The Upskilling workstream continues expanding enterprise AI learning capabilities while refining enablement approaches for sellers, delivery teams, and aspiring builders.",
    happened: [
      "Continued AI learning labs for sellers, delivery teams, and aspiring builders.",
      "Conducted Agentic AI mini lab and demo training.",
      "Expanded planning for 2H2026 learning labs."
    ],
    impact: [
      "Learning labs delivered across multiple audiences.",
      "Additional aspiring builder learning lab announced.",
      "Upskilling alignment established for 2H priorities."
    ],
    goals: [
      "Expands enterprise AI fluency",
      "Supports scalable AI enablement",
      "Builds practical AI usage capability"
    ],
    priorities: [
      { priority: "Prepare 2H2026 learning lab calendar", owners: "Upskilling", timing: "Upcoming" },
      { priority: "Launch aspiring builder lab design", owners: "Upskilling", timing: "Upcoming" }
    ],
    risks: [
      "Low AI for Sellers lab enrollment.",
      "Participants and instructors need protected learning time.",
      "Questions remain around builder coding expectations."
    ],
    dependencies: ["Depends on leadership support and builder guidance content."],
    decisions: ["Need clarity around CoDex and coding expectations for builders."]
  },
  {
    name: "AI Champions",
    leads: "Herve",
    status: "On Track",
    tone: "success",
    summary:
      "The AI Champions workstream continues scaling through grassroots adoption, workflow alignment, and reusable enablement content while surfacing important enterprise adoption barriers.",
    happened: [
      "Continued grassroots recruiting and enablement efforts.",
      "Launched knowledge packaging and sharing flywheel.",
      "Published AI Adoption Signals and enablement materials."
    ],
    impact: [
      "Membership increased 57% since pivot on 3/26.",
      "Knowledge-sharing pipeline established.",
      "Workflow friction and adoption barriers surfaced through Champion feedback."
    ],
    goals: [
      "Expands peer-driven AI adoption",
      "Builds scalable grassroots enablement",
      "Improves visibility into workflow friction"
    ],
    priorities: [
      { priority: "Launch BEN and ERG recruiting", owners: "AI Champions", timing: "Upcoming" },
      { priority: "Focus Champions on priority workflows", owners: "AI Champions", timing: "Upcoming" }
    ],
    risks: [
      "Volunteer sustainability must remain lightweight and impactful.",
      "CoDex still perceived as too technical for non-engineers."
    ],
    dependencies: ["Depends on reusable enablement assets and adoption guidance."],
    decisions: ["Need guidance on responsible use of adoption metrics."]
  }
];
