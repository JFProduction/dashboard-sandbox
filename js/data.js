 google.setOnLoadCallback(drawVisualization);

 function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar'],
      ['2004/05',  165,      938,         522],
      ['2005/06',  135,      1120,        599],
      ['2006/07',  157,      1167,        587]
    ]);
    
    var options = {
      title : 'Monthly Coffee Production by Country',
       vAxis: {
          title: 'Cups',
          textStyle: { color: '#fff' },
          titleTextStyle: { color: '#FFF' }
      },
      legendTextStyle: { color: '#FFF', backgroundColor: 'transparent' },
      titleTextStyle: { color: '#FFF' },
      hAxis: {
          title: 'Month', 
          textStyle: { color: '#fff' },
          titleTextStyle: { color: '#FFF' }
      },
      seriesType: 'bars',
      backgroundColor: '#233242',
      'chartArea': {
          'backgroundColor': { 'fill': '#EDEBE8' },
          'color': { 
              'fill': 'cornsmilk',
              'opacity': 100 
          },
      }
    };
    
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div00'));
    chart.draw(data, options);
    
    data = google.visualization.arrayToDataTable([
      ['Day', 'Shia 1', 'Shia 2', 'Shia 3 '],
      ['10/15',  165,      938,         522],
      ['10/16',  135,      1120,        599],
      ['10/17',  157,      1167,        587]
    ]);
    
    options.title = 'Just Do It';
    options.hAxis.title = 'Day';
    options.vAxis.title = 'Shia';
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div01'));
    chart.draw(data, options);
    
    data = google.visualization.arrayToDataTable([
      ['Hour', 'Babby 1', 'Babby 2', 'Babby  3 '],
      ['10',  12,      1,         4],
      ['11',  16,      11,        23],
      ['12',  55,      12,        21],
      ['13',  6,      80,        67 ],
      ['14',  157,      22,        82],
      ['15',  8,      17,      50]
    ]);

    options.title = 'Crying Babbys';
    options.hAxis.title = 'Hour';
    options.vAxis.title = 'Babby';
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div02'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div10'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div11'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div12'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div20'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div21'));
    chart.draw(data, options);
    
    chart = new google.visualization.ComboChart(document.getElementById('chart_div22'));
    chart.draw(data, options);
}