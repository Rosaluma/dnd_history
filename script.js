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
