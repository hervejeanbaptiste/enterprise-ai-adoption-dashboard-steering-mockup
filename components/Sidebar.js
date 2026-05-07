import { html } from "htm/react";
import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardList,
  GraduationCap,
  Hammer,
  LayoutDashboard,
  LineChart,
  ShieldAlert,
  UsersRound
} from "lucide-react";

const iconMap = {
  executive: LayoutDashboard,
  sales: LineChart,
  workstreams: ClipboardList,
  delivery: BriefcaseBusiness,
  builders: Hammer,
  upskilling: GraduationCap,
  champions: UsersRound,
  governance: ShieldAlert
};

export default function Sidebar({ items, activeSection, onNavigate }) {
  return html`
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">
          <${BarChart3} size=${22} />
        </div>
        <div>
          <strong>Enterprise AI</strong>
          <span>Adoption Dashboard</span>
        </div>
      </div>

      <nav className="side-nav" aria-label="Dashboard sections">
        ${items.map((item) => {
          const Icon = iconMap[item.id];
          const isActive = activeSection === item.id;

          return html`
            <button
              className=${`side-nav__item ${isActive ? "side-nav__item--active" : ""}`}
              key=${item.id}
              onClick=${() => onNavigate(item.id)}
              type="button"
            >
              <${Icon} size=${18} />
              <span>${item.label}</span>
            </button>
          `;
        })}
      </nav>

      <div className="sidebar-card">
        <span>Steering Committee Pulse</span>
        <strong>Leadership sponsorship remains the highest-confidence adoption lever.</strong>
      </div>
    </aside>
  `;
}
