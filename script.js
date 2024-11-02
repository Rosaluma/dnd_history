google.charts.load("current", {
  callback: drawChart,
  packages: ["timeline"]
});

function drawChart() {
  var container = document.getElementById("chart_div");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "Term" });
  dataTable.addColumn({ type: "string", id: "Event" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });

  const events = [
    ["World Events", "Event 1", new Date(13033, 1, 4), new Date(13042, 1, 4)],
    ["Coneenci", "Birth", new Date(13044, 1, 4, 5), new Date(13044, 1, 4, 6)],
    ["Coneenci", "Jepudrice", new Date(13045, 0, 14), new Date(13050, 1, 1)],
    ["Coneenci", "Turuner Village", new Date(13050, 1, 4), new Date(13063, 2, 13)],
    ["Coneenci", "Omur Town", new Date(13063, 3, 13), new Date(13065, 9, 18)],
    ["Soup", "Origins", new Date(13049, 1, 4), new Date(13049, 1, 4)],
    ["Filler Character", "Event 1", new Date(13046, 2, 4), new Date(13049, 2, 4)],
    ["Filler Character", "Event 2", new Date(13051, 2, 4), new Date(13054, 2, 4)],
    ["Filler Character 2", "Event 1", new Date(13056, 2, 4), new Date(13059, 2, 4)],
    ["Filler Character 2", "Event 2", new Date(13061, 2, 4), new Date(13064, 2, 4)] 
    // Add remaining events...
  ];

  dataTable.addRows(events);

  const options = {
    height: 400,
    timeline: { showRowLabels: true, groupByRowLabel: true, colorByRowLabel: true },
    tooltip: { trigger: 'none' },
    avoidOverlappingGridLines: true
  };

  chart.draw(dataTable, options);

  google.visualization.events.addListener(chart, 'select', function () {
  const selectedItem = chart.getSelection()[0];
  if (selectedItem) {
    const event = events[selectedItem.row];
    const startDate = event[2];
    const endDate = event[3];
    const duration = Math.ceil((endDate - startDate) / (1000 * 3600 * 24)); // Duration in days
    const dateString = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;

    // Update the modal header
    document.getElementById('eventModalLabel').innerHTML = `${event[1]} (${dateString}, Duration: ${duration} days)`;

    let content = `<strong>${event[1]}</strong><br>`;
    
    if (event[1] === "Jepudrice") {
      content += "<img src='./images/jepudrice.jpg' alt='Jepudrice' class='img-fluid'>";
    } else if (event[1] === "Birth") {
      content += "<img src='./images/conneenci_birth.jpg' alt='Coneenci_Birth' class='img-fluid'>";
    } else {
      content += "Details for this event will be added later.";
    }

    document.getElementById('modalContent').innerHTML = content;
    $('#eventModal').modal('show');
  }
});
}
