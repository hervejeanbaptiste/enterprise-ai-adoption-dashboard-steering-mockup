import { useMemo, useState } from "react";
import { html } from "htm/react";
import {
  AlertTriangle,
  BadgeCheck,
  BrainCircuit,
  CircleDollarSign,
  ClipboardCheck,
  Gauge,
  Sparkles,
  UsersRound
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Sidebar from "./components/Sidebar.js";
import MetricCard from "./components/MetricCard.js";
import ProgressBar from "./components/ProgressBar.js";
import DashboardSection from "./components/DashboardSection.js";
import DataTable from "./components/DataTable.js";
import {
  adoptionTrend,
  builderFunnel,
  builderMetrics,
  championInfluence,
  championMetrics,
  deliveryMetrics,
  executiveMetrics,
  fluencyByRole,
  governanceForecast,
  governanceMetrics,
  practiceAdoption,
  sellerBehaviors,
  salesMetrics,
  salesPipeline,
  workstreamActionMetrics,
  workstreamRollup,
  workstreamTemplateSections,
  workstreamUpdates,
  upskillingMetrics,
  workflowAdoption
} from "./data/mockData.js";

const navItems = [
  { id: "executive", label: "Executive View" },
  { id: "workstreams", label: "Workstream Actions" },
  { id: "sales", label: "AI-Enabled Sales" },
  { id: "delivery", label: "AI-Enabled Delivery" },
  { id: "builders", label: "Builder Pipeline" },
  { id: "upskilling", label: "Upskilling" },
  { id: "champions", label: "AI Champions" },
  { id: "governance", label: "Governance" }
];

const metricIcons = [Gauge, UsersRound, BrainCircuit, Sparkles, BadgeCheck, AlertTriangle];
const chartColors = ["#d91b5c", "#1e63ff", "#00a3a3", "#f59e0b", "#7c3aed"];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  return html`
    <div className="chart-tooltip">
      <strong>${label}</strong>
      ${payload.map(
        (entry) => html`<span key=${entry.dataKey}>${entry.name}: ${entry.value}</span>`
      )}
    </div>
  `;
}

function MetricGrid({ metrics, columns = "auto" }) {
  return html`
    <div className=${`metric-grid metric-grid--${columns}`}>
      ${metrics.map(
        (metric, index) => html`
          <${MetricCard}
            key=${metric.label}
            ...${metric}
            icon=${metricIcons[index % metricIcons.length]}
          />
        `
      )}
    </div>
  `;
}

function Panel({ title, eyebrow, children, compact = false }) {
  return html`
    <article className=${`panel ${compact ? "panel--compact" : ""}`}>
      <div className="panel__header">
        <span>${eyebrow}</span>
        <h3>${title}</h3>
      </div>
      ${children}
    </article>
  `;
}

function StatusPill({ status, tone = "default" }) {
  return html`<span className=${`status-pill status-pill--${tone}`}>${status}</span>`;
}

function BulletList({ items, variant = "default" }) {
  return html`
    <ul className=${`bullet-list bullet-list--${variant}`}>
      ${items.map((item) => html`<li key=${item}>${item}</li>`)}
    </ul>
  `;
}

function WorkstreamCard({ update }) {
  const priorityColumns = [
    { key: "priority", label: "Priority" },
    { key: "owners", label: "Owner(s)" },
    { key: "timing", label: "Timing" }
  ];

  return html`
    <article className=${`workstream-card workstream-card--${update.tone}`}>
      <div className="workstream-card__header">
        <div>
          <span>${update.leads}</span>
          <h3>${update.name}</h3>
        </div>
        <${StatusPill} status=${update.status} tone=${update.tone} />
      </div>

      <p className="workstream-card__summary">${update.summary}</p>

      <div className="workstream-card__grid">
        <div>
          <h4>What happened</h4>
          <${BulletList} items=${update.happened} />
        </div>
        <div>
          <h4>Evidence of impact</h4>
          <${BulletList} items=${update.impact} />
        </div>
        <div>
          <h4>Supports adoption goals</h4>
          <${BulletList} items=${update.goals} variant="check" />
        </div>
        <div>
          <h4>Risks and help needed</h4>
          <${BulletList} items=${update.risks} />
        </div>
      </div>

      <div className="workstream-card__actions">
        <h4>Next week priorities</h4>
        <${DataTable} columns=${priorityColumns} rows=${update.priorities} />
      </div>

      <div className="dependency-row">
        <div>
          <span>Dependencies</span>
          <${BulletList} items=${update.dependencies} />
        </div>
        <div>
          <span>Decisions / support needed</span>
          <${BulletList} items=${update.decisions} />
        </div>
      </div>
    </article>
  `;
}

function AdoptionMomentumChart() {
  return html`
    <${ResponsiveContainer} width="100%" height=${280}>
      <${LineChart} data=${adoptionTrend} margin=${{ top: 10, right: 12, left: -16, bottom: 0 }}>
        <${CartesianGrid} stroke="#e6edf6" vertical=${false} />
        <${XAxis} dataKey="week" tickLine=${false} axisLine=${false} />
        <${YAxis} yAxisId="users" domain=${[3000, 5000]} tickLine=${false} axisLine=${false} />
        <${YAxis}
          yAxisId="index"
          orientation="right"
          domain=${[50, 70]}
          tickLine=${false}
          axisLine=${false}
        />
        <${Tooltip} content=${html`<${CustomTooltip} />`} />
        <${Line}
          yAxisId="index"
          type="monotone"
          dataKey="index"
          name="Adoption index"
          stroke="#d91b5c"
          strokeWidth=${3}
          dot=${{ r: 4, fill: "#d91b5c" }}
        />
        <${Line}
          yAxisId="users"
          type="monotone"
          dataKey="activeUsers"
          name="Active users"
          stroke="#1e63ff"
          strokeWidth=${3}
          dot=${{ r: 4, fill: "#1e63ff" }}
        />
      <//>
    <//>
  `;
}

function PracticeAdoptionChart() {
  return html`
    <${ResponsiveContainer} width="100%" height=${280}>
      <${BarChart}
        data=${practiceAdoption}
        layout="vertical"
        margin=${{ top: 8, right: 18, left: 20, bottom: 0 }}
      >
        <${CartesianGrid} stroke="#e6edf6" horizontal=${false} />
        <${XAxis} type="number" domain=${[0, 100]} tickLine=${false} axisLine=${false} />
        <${YAxis} dataKey="practice" type="category" tickLine=${false} axisLine=${false} width=${86} />
        <${Tooltip} content=${html`<${CustomTooltip} />`} />
        <${Bar} dataKey="adoption" name="Adoption" radius=${[0, 6, 6, 0]}>
          ${practiceAdoption.map(
            (entry, index) => html`
              <${Cell} key=${entry.practice} fill=${chartColors[index % chartColors.length]} />
            `
          )}
        <//>
      <//>
    <//>
  `;
}

function SalesPipelineChart() {
  return html`
    <${ResponsiveContainer} width="100%" height=${285}>
      <${BarChart} data=${salesPipeline} margin=${{ top: 8, right: 12, left: -18, bottom: 0 }}>
        <${CartesianGrid} stroke="#e6edf6" vertical=${false} />
        <${XAxis} dataKey="group" tickLine=${false} axisLine=${false} />
        <${YAxis} tickLine=${false} axisLine=${false} />
        <${Tooltip} content=${html`<${CustomTooltip} />`} />
        <${Bar} dataKey="pipeline" name="Pipeline" radius=${[6, 6, 0, 0]} fill="#d91b5c" />
      <//>
    <//>
  `;
}

function GovernanceForecastChart() {
  return html`
    <${ResponsiveContainer} width="100%" height=${285}>
      <${LineChart} data=${governanceForecast} margin=${{ top: 8, right: 12, left: -16, bottom: 0 }}>
        <${CartesianGrid} stroke="#e6edf6" vertical=${false} />
        <${XAxis} dataKey="day" tickLine=${false} axisLine=${false} />
        <${YAxis} tickLine=${false} axisLine=${false} />
        <${Tooltip} content=${html`<${CustomTooltip} />`} />
        <${Line}
          type="monotone"
          dataKey="actual"
          name="Forecast credits"
          stroke="#c62828"
          strokeWidth=${3}
          dot=${{ r: 4, fill: "#c62828" }}
        />
        <${Line}
          type="monotone"
          dataKey="cap"
          name="Monthly cap"
          stroke="#1e63ff"
          strokeWidth=${3}
          strokeDasharray="6 6"
          dot=${false}
        />
      <//>
    <//>
  `;
}

function App() {
  const [activeSection, setActiveSection] = useState("executive");
  const [scenario, setScenario] = useState("Firmwide");

  const scenarioInsight = useMemo(() => {
    const insights = {
      Firmwide: "Adoption is accelerating where leadership rituals make AI usage visible.",
      Sales: "Demo-led pursuits are lifting win-rate confidence across priority accounts.",
      Delivery: "Reusable workflow patterns are converting experimentation into operating leverage."
    };

    return insights[scenario];
  }, [scenario]);

  const navigateToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sellerColumns = [
    { key: "behavior", label: "Seller behavior" },
    {
      key: "adoption",
      label: "Adoption",
      render: (row) => html`<${ProgressBar} value=${row.adoption} label=${row.signal} compact=${true} />`
    }
  ];

  const fluencyColumns = [
    { key: "role", label: "Role" },
    { key: "fluency", label: "Fluency" },
    {
      key: "score",
      label: "Confidence",
      render: (row) => html`<${ProgressBar} value=${row.score} label=${row.fluency} compact=${true} />`
    }
  ];

  const priorityColumns = [
    { key: "priority", label: "Priority" },
    { key: "owners", label: "Owner(s)" },
    { key: "timing", label: "Timing" }
  ];

  return html`
    <div className="app-shell">
      <${Sidebar} items=${navItems} activeSection=${activeSection} onNavigate=${navigateToSection} />

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">AI Steering Committee Demo</span>
            <h1>Enterprise AI Adoption Dashboard</h1>
            <p>
              Firmwide leadership view spanning adoption, workforce readiness, business impact,
              governance, and leadership engagement.
            </p>
          </div>
          <div className="topbar__meta">
            <span>Q2 FY26</span>
            <strong>Last refreshed 8:30 AM ET</strong>
          </div>
        </header>

        <div className="scenario-bar">
          <div className="scenario-buttons" aria-label="Demo scenario">
            ${["Firmwide", "Sales", "Delivery"].map(
              (item) => html`
                <button
                  className=${scenario === item
                    ? "scenario-button scenario-button--active"
                    : "scenario-button"}
                  key=${item}
                  onClick=${() => setScenario(item)}
                  type="button"
                >
                  ${item}
                </button>
              `
            )}
          </div>
          <p>${scenarioInsight}</p>
        </div>

        <${DashboardSection}
          id="executive"
          eyebrow="01"
          title="Executive View"
          description="A concise readout for the CAIO, CHRO, CIO, and AI Steering Committee."
        >
          <div className="insight-banner">
            <${Sparkles} size=${20} />
            <strong>
              Practices with visible leadership sponsorship are adopting AI 2.3x faster than peers.
            </strong>
          </div>

          <${MetricGrid} metrics=${executiveMetrics} columns="six" />

          <div className="panel-grid panel-grid--two">
            <${Panel} title="Adoption momentum" eyebrow="Index and active users">
              <${AdoptionMomentumChart} />
            <//>

            <${Panel} title="Practice adoption spread" eyebrow="Leadership visibility signal">
              <${PracticeAdoptionChart} />
            <//>
          </div>
        <//>

        <${DashboardSection}
          id="workstreams"
          eyebrow="02"
          title="Workstream Actions"
          description="Weekly operating cadence for underlying AI adoption workstreams, with consolidated executive rollup and next-action accountability."
        >
          <div className="workstream-hero">
            <div>
              <span>AI Adoption Program Weekly Executive Rollup</span>
              <h3>Overall status: ${workstreamRollup.status}</h3>
              <p>${workstreamRollup.summary}</p>
            </div>
            <div className="workstream-hero__status">
              <${ClipboardCheck} size=${28} />
              <strong>${workstreamRollup.weekEnding}</strong>
              <span>Week ending</span>
            </div>
          </div>

          <${MetricGrid} metrics=${workstreamActionMetrics} columns="six" />

          <div className="panel-grid panel-grid--two">
            <${Panel} title="Standard weekly model" eyebrow="Operating template">
              <div className="template-steps">
                ${workstreamTemplateSections.map(
                  (section, index) => html`
                    <div className="template-step" key=${section}>
                      <span>${index + 1}</span>
                      <strong>${section}</strong>
                    </div>
                  `
                )}
              </div>
            <//>

            <${Panel} title="Program momentum" eyebrow="What happened and why it matters">
              <div className="rollup-grid">
                <div>
                  <h4>What happened this week</h4>
                  <${BulletList} items=${workstreamRollup.happened} />
                </div>
                <div>
                  <h4>Evidence of impact</h4>
                  <${BulletList} items=${workstreamRollup.impact} />
                </div>
              </div>
            <//>
          </div>

          <div className="panel-grid panel-grid--two workstream-rollup-panels">
            <${Panel} title="Program priority actions" eyebrow="Next week / upcoming">
              <${DataTable} columns=${priorityColumns} rows=${workstreamRollup.priorities} />
            <//>

            <${Panel} title="Risks, dependencies, and asks" eyebrow="Where leadership can unblock scale">
              <div className="risk-dependency-grid">
                <div>
                  <h4>Risks / help needed</h4>
                  <${BulletList} items=${workstreamRollup.risks} />
                </div>
                <div>
                  <h4>Dependencies</h4>
                  <${BulletList} items=${workstreamRollup.dependencies} />
                </div>
                <div>
                  <h4>Decisions / support needed</h4>
                  <${BulletList} items=${workstreamRollup.decisions} />
                </div>
              </div>
            <//>
          </div>

          <${Panel} title="How this supports AI adoption goals" eyebrow="Program-level linkage">
            <div className="goal-chip-grid">
              ${workstreamRollup.goals.map(
                (goal) => html`<span className="goal-chip" key=${goal}>${goal}</span>`
              )}
            </div>
          <//>

          <div className="workstream-update-grid">
            ${workstreamUpdates.map(
              (update) => html`<${WorkstreamCard} key=${update.name} update=${update} />`
            )}
          </div>
        <//>

        <${DashboardSection}
          id="sales"
          eyebrow="03"
          title="AI-Enabled Sales"
          description="Pipeline quality, proposal productivity, and field behaviors tied to revenue impact."
        >
          <${MetricGrid} metrics=${salesMetrics} columns="five" />

          <div className="panel-grid panel-grid--two">
            <${Panel} title="Seller behavior adoption" eyebrow="Priority motions">
              <${DataTable} columns=${sellerColumns} rows=${sellerBehaviors} />
            <//>

            <${Panel} title="AI-influenced pipeline by practice" eyebrow="$ millions">
              <${SalesPipelineChart} />
            <//>
          </div>
        <//>

        <${DashboardSection}
          id="delivery"
          eyebrow="04"
          title="AI-Enabled Delivery"
          description="Operational adoption across delivery workflows, reusable accelerators, and power-user depth."
        >
          <${MetricGrid} metrics=${deliveryMetrics} columns="four" />

          <div className="panel-grid panel-grid--two panel-grid--delivery">
            <${Panel} title="Workflow adoption" eyebrow="Repeatable delivery motions">
              <div className="workflow-list">
                ${workflowAdoption.map(
                  (item) => html`
                    <${ProgressBar} key=${item.workflow} value=${item.adoption} label=${item.workflow} />
                  `
                )}
              </div>
            <//>

            <${Panel} title="Goal trajectory" eyebrow="AI-enabled delivery hours">
              <div className="goal-card">
                <div className="goal-card__dial">
                  <span>27%</span>
                  <small>toward 40% goal</small>
                </div>
                <div>
                  <h4>Delivery adoption is scaling through the highest-frequency workflows.</h4>
                  <p>
                    Meeting synthesis and requirements drafting are now mainstream; solution design
                    acceleration remains the next leadership push.
                  </p>
                </div>
              </div>
            <//>
          </div>
        <//>

        <${DashboardSection}
          id="builders"
          eyebrow="05"
          title="Builder Pipeline"
          description="The path from practitioner interest to scaled internal AI solutions."
        >
          <${MetricGrid} metrics=${builderMetrics} columns="six" />

          <${Panel} title="Builder funnel" eyebrow="Practitioner-to-production conversion">
            <div className="funnel">
              ${builderFunnel.map((stage, index) => {
                const max = builderFunnel[0].value;
                const width = Math.max((stage.value / max) * 100, 18);

                return html`
                  <div className="funnel__row" key=${stage.stage}>
                    <span>${stage.stage}</span>
                    <div className="funnel__bar-shell">
                      <div
                        className="funnel__bar"
                        style=${{
                          width: `${width}%`,
                          background: chartColors[index % chartColors.length]
                        }}
                      >
                        <strong>${stage.value.toLocaleString()}</strong>
                      </div>
                    </div>
                  </div>
                `;
              })}
            </div>
          <//>
        <//>

        <${DashboardSection}
          id="upskilling"
          eyebrow="06"
          title="Upskilling"
          description="Training completion, labs, and role-specific fluency signals for workforce readiness."
        >
          <${MetricGrid} metrics=${upskillingMetrics} columns="four" />

          <div className="panel-grid panel-grid--two">
            <${Panel} title="AI fluency by role" eyebrow="Readiness signal">
              <${DataTable} columns=${fluencyColumns} rows=${fluencyByRole} />
            <//>

            <${Panel} title="Training runway" eyebrow="Phase-one completion">
              <div className="readiness-stack">
                ${upskillingMetrics.map(
                  (metric) => html`
                    <div className="readiness-item" key=${metric.label}>
                      <div>
                        <span>${metric.label}</span>
                        <strong>${metric.value}</strong>
                      </div>
                      <${ProgressBar} value=${metric.progress} compact=${true} />
                    </div>
                  `
                )}
              </div>
            <//>
          </div>
        <//>

        <${DashboardSection}
          id="champions"
          eyebrow="07"
          title="AI Champions"
          description="Distributed change leadership, office activation, and practice-level influence."
        >
          <${MetricGrid} metrics=${championMetrics} columns="four" />

          <${Panel} title="Champion Influence Index" eyebrow="Community activation quality">
            <div className="influence-grid">
              ${championInfluence.map(
                (item) => html`
                  <div className="influence-card" key=${item.dimension}>
                    <span>${item.dimension}</span>
                    <strong>${item.score}</strong>
                    <${ProgressBar} value=${item.score} compact=${true} />
                  </div>
                `
              )}
            </div>
          <//>
        <//>

        <${DashboardSection}
          id="governance"
          eyebrow="08"
          title="Governance"
          description="Usage controls, credit consumption, and risk posture for responsible scale."
        >
          <div className="risk-banner">
            <${AlertTriangle} size=${21} />
            <div>
              <span>Risk status: High</span>
              <strong>Restrict 5.4 Pro to approved business-use cases with monitoring.</strong>
            </div>
          </div>

          <${MetricGrid} metrics=${governanceMetrics} columns="five" />

          <div className="panel-grid panel-grid--two">
            <${Panel} title="Monthly credit forecast" eyebrow="Actual burn versus cap">
              <${GovernanceForecastChart} />
            <//>

            <${Panel} title="Control posture" eyebrow="Recommended action">
              <div className="governance-action">
                <${CircleDollarSign} size=${28} />
                <h4>Forecast is tracking 3.8% over cap.</h4>
                <p>
                  Maintain Codex growth for approved builder and engineering workflows while tightening
                  access to premium models for unapproved exploratory usage.
                </p>
                <div className="policy-list">
                  <span>Approved use cases</span>
                  <span>Spend monitoring</span>
                  <span>Monthly exception review</span>
                  <span>Leader-owned adoption goals</span>
                </div>
              </div>
            <//>
          </div>
        <//>
      </main>
    </div>
  `;
}

export default App;
