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
    //for (var i = 0; i < randoms.length; i++) {
    //    console.log(randoms[i]);
    //}
    //console.log(randoms);
    //triParInsertion(randoms);
    triParSelection(randoms);
    //console.log(randoms);
    
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

function reDrawChart(array) {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: array
        },
        yAxis: {
            max: 100,
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Numb3rs',
            data: array
        }],
        plotOptions: {
            series: {
                animation: false
            }
        },
        tooltip: { enabled: false }
    });
}

async function triParSelection(arrayToSort) {
    // tant que [4] > [7] on continue jusqu'à la fin, on compare [7] pour voir si [11] est inférieur
    // si [11] est inférieur on le selection, dès que l'on arrive on change de place entre le [11] et le [4]
    // on fait ca pour tout la longeur du tableau

    for (var i = 0; i < arrayToSort.length; i++) {
        actual = arrayToSort[i];
        selected = arrayToSort[i];
        selectedIndex = i;
        j = i;
        while(j != arrayToSort.length) {
            if(selected > arrayToSort[j]) {
                selected = arrayToSort[j];
                selectedIndex = j;
            }
            j++;
        }
        arrayToSort[i] = arrayToSort[selectedIndex];
        arrayToSort[selectedIndex] = actual;
        await sleep(200);
        reDrawChart(arrayToSort);
    }


    return arrayToSort;
}

async function triParInsertion(arrayToSort) {
    //sortedArray = [];
    for (var i = 0; i < arrayToSort.length; i++) {
        actual = arrayToSort[i];
        j = i;
        while (actual < arrayToSort[j - 1] && j != 0) {
            //deplacer les arraytosort(j) de 1 vers la droite
            arrayToSort[j] = arrayToSort[j - 1];
            j--;
            await sleep(200);
            reDrawChart(arrayToSort);
        }
        // deplacer le actual a la place j
        arrayToSort[j] = actual;
        //if (actual > )
        //for (var i = 0; sortedArray.length; i++) {
        //actual > 


        // a > b ok
        // a < b --> z = a, a = b, b = z
        // tant que b < a, etc... et tant que l'on est pas au début (dernier element)
        // on compare si c'est supérieur on le place la
        // a chaque fois on deplace les element avant



        //}
    }
    return arrayToSort;
}

async function changeChartTheme(theme) {
    //console.log("changeChartTheme working fine");

    var oldTheme = document.querySelector("#themeScript");
    oldTheme.remove();
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.id = "themeScript";
    console.log(theme.value);
    script.src = 'js/themes/' + theme.value;
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