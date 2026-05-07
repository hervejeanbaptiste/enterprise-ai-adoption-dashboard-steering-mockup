import { html } from "htm/react";

export default function DataTable({ columns, rows }) {
  return html`
    <div className="table-shell">
      <table>
        <thead>
          <tr>
            ${columns.map((column) => html`<th key=${column.key}>${column.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${rows.map(
            (row) => html`
              <tr key=${row.id || row.behavior || row.role || row.workflow || row.priority || row.name}>
                ${columns.map(
                  (column) => html`
                    <td key=${column.key}>${column.render ? column.render(row) : row[column.key]}</td>
                  `
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
}
