var data1 = document.getElementById('data1');
var data2 = document.getElementById('data2');
var data3 = document.getElementById('data3');
var data4 = document.getElementById('data4');
var data5 = document.getElementById('data5');
var data6 = document.getElementById('data6');
var data7 = document.getElementById('data7');
var data8 = document.getElementById('data8');
var data9 = document.getElementById('data9');
var data10 = document.getElementById('data10');
var data11 = document.getElementById('data11');
var data12 = document.getElementById('data12');
var data13 = document.getElementById('data13');
var data14 = document.getElementById('data14');
var data15 = document.getElementById('data15');

var data1text = document.getElementById('data1text');
var data2text = document.getElementById('data2text');
var data3text = document.getElementById('data3text');
var data4text = document.getElementById('data4text');
var data5text = document.getElementById('data5text');
var data6text = document.getElementById('data6text');
var data7text = document.getElementById('data7text');
var data8text = document.getElementById('data8text');
var data9text = document.getElementById('data9text');
var data10text = document.getElementById('data10text');
var data11text = document.getElementById('data11text');
var data12text = document.getElementById('data12text');
var data13text = document.getElementById('data13text');
var data14text = document.getElementById('data14text');
var data15text = document.getElementById('data15text');

var data1new = data1text.value;




console.log(data1new);


let ctx = document.getElementById('myChart').getContext('2d');
let labels = [data1text.value,data2text.value,data3text.value];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B', '#FF865E','#E4AEC5','#243D25','#F07DEA','#EFEFEF','#FFAE6D','#483838','#E0D98C','#FEC260','#FF1E00',
'#7DCE13'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
        data: [data1.value,data2.value,data3.value,data3.value,data4.value,data5.value,data6.value,data7.value,data8.value,data9.value,data10.value,data12.value,
          data13.value,data14.value,data15.value],
        backgroundColor: colorHex
      }],

        labels: [data1text.value,data2text.value,data3text.value,data4text.value,data5text.value,data6text.value,data7text.value,data8text.value,data9text.value,
          data10text.value,data11text.value,data12text.value,data13text.value,data14text.value,data15text.value],
     },
     options: {
      scales: {
        x: {
            grid: {
              offset: true
            }
        }
    },
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



function updateChart(){
  var updateValues = [data1.value,data2.value,data3.value,data3.value,data4.value,data5.value,data6.value,data7.value,data8.value,data9.value,data10.value,data12.value,
    data13.value,data14.value,data15.value];
  var updateLables = [data1text.value,data2text.value,data3text.value,data4text.value,data5text.value,data6text.value,data7text.value,data8text.value,data9text.value,
    data10text.value,data11text.value,data12text.value,data13text.value,data14text.value,data15text.value];

  myChart.data.lables = updateLables;
  myChart.data.datasets[0].data = updateValues;
  myChart.update();
}
document.getElementById('data1color').style.color = myChart.data.datasets[0].backgroundColor[0];
document.getElementById('data2color').style.color = myChart.data.datasets[0].backgroundColor[1];
document.getElementById('data3color').style.color = myChart.data.datasets[0].backgroundColor[2];
//var data1color = myChart.data.datasets[0].backgroundColor[0];
