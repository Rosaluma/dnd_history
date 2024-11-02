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
    ["World Events", "Event 1", new Date(13033, 2, 4), new Date(13042, 2, 4)],
    ["Coneenci", "Birth", new Date(13044, 2, 4, 5), new Date(13044, 2, 4, 6)],
    ["Coneenci", "Jepudrice", new Date(13045, 1, 14), new Date(13050, 2, 1)],
    ["Coneenci", "Turuner Village", new Date(13050, 2, 4), new Date(13063, 3, 13)],
    ["Coneenci", "Omur Town", new Date(13063, 4, 13), new Date(13065, 10, 18)],
    ["Soup", "Origins", new Date(13049, 2, 4), new Date(13049, 2, 4)],
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
    avoidOverlappingGridLines: true
  };

  chart.draw(dataTable, options);

  google.visualization.events.addListener(chart, 'select', function () {
    const selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      const event = events[selectedItem.row];
      let content = `<strong>${event[1]}</strong><br>`;
      
      if (event[1] === "Jepudrice") {
        content += "<img src='./images/jeprudice_smaller.jpg' alt='Jepudrice' class='img-fluid'>";
      } else {
        content += "Details for this event will be added later.";
      }

      document.getElementById('modalContent').innerHTML = content;
      $('#eventModal').modal('show');
    }
  });
}
