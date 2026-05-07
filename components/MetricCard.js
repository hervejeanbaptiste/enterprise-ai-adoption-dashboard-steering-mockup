import { html } from "htm/react";
import ProgressBar from "./ProgressBar.js";

export default function MetricCard({ label, value, detail, progress, tone = "default", icon: Icon }) {
  return html`
    <article className=${`metric-card metric-card--${tone}`}>
      <div className="metric-card__header">
        <span>${label}</span>
        ${Icon
          ? html`
              <span className="metric-card__icon" aria-hidden="true">
                <${Icon} size=${18} strokeWidth=${2} />
              </span>
            `
          : null}
      </div>
      <div className="metric-card__value">${value}</div>
      <p>${detail}</p>
      ${typeof progress === "number"
        ? html`<${ProgressBar} value=${progress} tone=${tone} compact=${true} />`
        : null}
    </article>
  `;
}
