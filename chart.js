var oldRandoms;

document.addEventListener('DOMContentLoaded', function () {
    drawChart();
});

// function giveTenRandom() {
//     var randoms = [];
//     for (var i = 0; i < 10; i++) {
//         randoms.push(Math.floor(Math.random() * Math.floor(100) + 1));
//     }
//     return randoms;
// }

function drawChart() {
    var randoms = giveTenRandom();
    for (var i = 0; i < randoms.length; i++) {
        console.log(randoms[i]);
    }
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: randoms
        },
        yAxis: {
            max: 100,
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Numb3rs',
            data: randoms
        }],
        plotOptions: {
            series: {
                animation: false
            }
        },
        tooltip: { enabled: false }
    });

}

function giveTenRandom() {
    var randoms = [];
    for (var i = 0; i < 10; i++) {
        randoms.push(Math.floor(Math.random() * Math.floor(100) + 1));
    }
    oldRandoms = randoms;
    return randoms;
}

function reDrawChart(randoms) {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: randoms
        },
        yAxis: {
            max: 100,
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Numb3rs',
            data: randoms
        }],
        plotOptions: {
            series: {
                animation: false
            }
        },
        tooltip: { enabled: false }
    });
}

async function changeChartTheme(theme) {
    //console.log("changeChartTheme working fine");

    var oldTheme = document.querySelector("#themeScript");
    oldTheme.remove();
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.id = "themeScript";
    console.log(theme.value);
    script.src = 'js/themes/'+ theme.value;
    head.appendChild(script);
    await sleep(10);
    reDrawChart(oldRandoms);
    
    // to change the whole page CSS
    // var cssPage = document.querySelector("link");
    // cssPage.setAttribute("href", "chartcopy.css");
    // cssPage.innerHTML = "eres";

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }