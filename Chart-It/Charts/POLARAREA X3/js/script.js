var data1 = document.getElementById('data1');
var data2 = document.getElementById('data2');
var data3 = document.getElementById('data3');

var data1text = document.getElementById('data1text');
var data2text = document.getElementById('data2text');
var data3text = document.getElementById('data3text');

var data1new = data1text.value;




console.log(data1new);


let ctx = document.getElementById('myChart').getContext('2d');
let labels = [data1text.value,data2text.value,data3text.value];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B'];

let myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      datasets: [{
        data: [data1.value,data2.value,data3.value],
        backgroundColor: colorHex
      }],

        labels: [data1text.value,data2text.value,data3text.value],
     },
     options: {
       responsive: true,
       legend: {
         position: 'bottom'
       },
       plugins: {
         datalabels: {
           color: '#fff',
           anchor: 'end',
           align: 'start',
           offset: -10,
           borderWidth: 2,
           borderColor: '#fff',
           borderRadius: 25,
           backgroundColor: (context) => {
             return context.dataset.backgroundColor;
           },
           font: {
             weight: 'bold',
             size: '10'
           },
           formatter: (value) => {
             return value + ' %';
           }
         }
       }
     }
   })
//Download button
   var download = function(){
   var link = document.createElement('a');
   link.download = 'filename.png';
   link.href = document.getElementById('myChart').toDataURL()
   link.click();
  }
//download 
function updateChart(){
  var updateValues = [data1.value,data2.value,data3.value];
  var updateLables = [data1text.value,data2text.value,data3text.value];

  myChart.data.lables = updateLables;
  myChart.data.datasets[0].data = updateValues;
  myChart.update();
}
document.getElementById('data1color').style.color = myChart.data.datasets[0].backgroundColor[0];
document.getElementById('data2color').style.color = myChart.data.datasets[0].backgroundColor[1];
document.getElementById('data3color').style.color = myChart.data.datasets[0].backgroundColor[2];
//var data1color = myChart.data.datasets[0].backgroundColor[0];
