dscc.subscribeToData((data) => {
  const container = document.getElementById("container");
  const rows = data.tables.DEFAULT;

  container.innerHTML = rows.map(row => {
    const img = row["Thumbnail"]?.value || "";
    const roas = row["ROAS"]?.formattedValue || "N/A";
    const ctr = row["CTR"]?.formattedValue || "N/A";
    const cpc = row["CPC"]?.formattedValue || "N/A";

    return `
      <div class="card">
        <img src="${img}" onerror="this.style.display='none'" />
        <div class="metric"><strong>ROAS:</strong> ${roas}</div>
        <div class="metric"><strong>CTR:</strong> ${ctr}</div>
        <div class="metric"><strong>CPC:</strong> ${cpc}</div>
      </div>
    `;
  }).join("");
});
