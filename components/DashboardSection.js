import { html } from "htm/react";

export default function DashboardSection({ id, eyebrow, title, description, children }) {
  return html`
    <section className="dashboard-section" id=${id}>
      <div className="section-heading">
        <span>${eyebrow}</span>
        <div>
          <h2>${title}</h2>
          ${description ? html`<p>${description}</p>` : null}
        </div>
      </div>
      ${children}
    </section>
  `;
}
