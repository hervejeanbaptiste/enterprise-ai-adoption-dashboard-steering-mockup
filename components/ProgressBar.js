import { html } from "htm/react";

export default function ProgressBar({ value, label, tone = "default", compact = false }) {
  return html`
    <div className=${`progress-wrap ${compact ? "progress-wrap--compact" : ""}`}>
      <div className="progress-meta">
        ${label ? html`<span>${label}</span>` : null}
        <strong>${value}%</strong>
      </div>
      <div className="progress-track" aria-label=${`${label || "Progress"} ${value}%`}>
        <span
          className=${`progress-fill progress-fill--${tone}`}
          style=${{ width: `${Math.min(value, 100)}%` }}
        ></span>
      </div>
    </div>
  `;
}
