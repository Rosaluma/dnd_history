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
  dataTable.addColumn({ type: "string", role: "tooltip" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows([
    [
      "World Events",
      "Event 1",
      "<u> <b> 2/4/13021 </b> </u>" + "<br> •Crazy happenings!! EDIT",
      new Date(13033, 2, 4),
      new Date(13042, 2, 4)
    ],

    [
      "Coneenci",
      "Birth",
      "<u> <b> 2/4/13044 </b> </u>" + "<br> •Born in Woodly Village",
      new Date(13044, 2, 4, 5),
      new Date(13044, 2, 4, 6)
    ],
    [
      "Coneenci",
      "Jepudrice",
      "<img src='./images/jeprudice_smaller.jpg'></img>",
      new Date(13045, 1, 14),
      new Date(13050, 2, 1)
    ],
    [
      "Coneenci",
      "Turuner Village",
      "<u> <b> 2/4/13045->2/2/13045 </b> </u> <br> (6->19yrs old) | ~14 yrs <br> •Under the care of Patty Possu in Turuner Village",
      new Date(13050, 2, 4),
      new Date(13063, 3, 13)
    ],
    [
      "Coneenci",
      "Omur Town",
      "<u> <b> 4/13/13063->10/18/13063 </b> </u> <br> (19.2 -> 20.8 yrs old) | ~2.6 yrs <br> •chilling by Omur Town",
      new Date(13063, 4, 13),
      new Date(13065, 10, 18)
    ],
    [
      "Soup",
      "Origins",
      "<u> <b> 2/4/13049 </b> </u>" + "<br> •Gotta add stuff",
      new Date(13049, 2, 4),
      new Date(13049, 2, 4)
    ],
    [
      "Filler Character",
      "Event 1",
      "<u> <b> 2/4/13046 </b> </u>" + "<br> •Gotta add stuff",
      new Date(13046, 2, 4),
      new Date(13049, 2, 4)
    ],
    [
      "Filler Character",
      "Event 2",
      "<u> <b> 2/4/13051 </b> </u>" + "<br> •Gotta add stuff",
      new Date(13051, 2, 4),
      new Date(13054, 2, 4)
    ],
    [
      "Filler Character 2",
      "Event 1",
      "<u> <b> 2/4/13046 </b> </u>" + "<br> •Gotta add stuff",
      new Date(13056, 2, 4),
      new Date(13059, 2, 4)
    ],
    [
      "Filler Character 2",
      "Event 2",
      "<u> <b> 2/4/13051 </b> </u>" + "<br> •Gotta add stuff",
      new Date(13061, 2, 4),
      new Date(13064, 2, 4)
    ]
  ]);

  const options = {
    height: 300,
    timeline: {
      showRowLabels: true,
      groupByRowLabel: true,
      colorByRowLabel: true
    },

    avoidOverlappingGridLines: true
  };

  chart.draw(dataTable, options);
}
