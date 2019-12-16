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
    //triABulle(randoms);
    triParFusion(randoms);
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

async function triParFusion (arrayToSort) {
    arrayToSort = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60];
    //48, 52, 33, 21, 86
    //48, 52, 33,
    //48, 52

    //[48, 52, 33, 21, 86, 61, 49, 45, 89, 60][48, 52, 33, 21, 86][61, 49, 45, 89, 60][61, 49, 45][48, 52][48][52]

    console.log(arrayToSort);
    //triCopyPourFusion(arrayToSort);
    console.log(arrayToSort);
    //dividedArray = [[]];
    //dividedArray = [arrayToSort.slice(0, 5), arrayToSort.slice(5, 10)];
    //dividedArray = [[arrayToSort.slice(0, 3), arrayToSort(3, 5)],[arrayToSort.slice(5, 8), arrayToSort(8, 10)]]
    //dividedArray = [[[arrayToSort.slice(0, 2), arrayToSort.slice(2, 3)], arrayToSort(3, 5)],[[arrayToSort.slice(5, 7)], arrayToSort.slice(7, 8)], arrayToSort(8, 10)]]
    var x = arrayToSort.length;
    var nbDiv = (countFactors(x, 2));
    var a = [];
    var c = a;
    for (var i = 0; i < nbDiv; i++) {
        t = [];
        a.push(t);
        a = t;
    }
    console.log(c);
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    //Divide by two
    //take right
    //Divide by two
    //until it's only one
    //then compare
    //then merge
    //take left
    //divide by two
    //until it's only one
    //then compare
    //then merge
    ////////////////////////////////////////////////////////////////
    var tmp = arrayToSort.slice();
    var tmp2 = arrayToSort.slice();
    var d = [];
    d.push(tmp);
    for (var i = 0; i < nbDiv; i++) {
        tmp = tmp.slice(0, Math.ceil(tmp.length/2));
        d.push(tmp);
        tmp2 = tmp2.slice(Math.ceil(tmp2.length/2), tmp2.length);
        d.push(tmp2);
        tmp = tmp2;
    }

    for (var i = 0; i < d.length; i++) {
    //    console.log("d: ");
    //    console.log(d[d.length-i-1]);
        triCopyPourFusion(d[d.length-i-1]);
    }
    ////////////////////////////////////////////////////////////////
    console.log(d);
    console.log(arrayToSort);
    
    return arrayToSort;
}

function countFactors(x, n) {
    var f = 0;
    while (x > n) {
        x /= n;
        f++; 
    }
    return f;
}

function logOnThePage(text) {
    var txt = document.createTextNode(text);
    document.body.appendChild(txt);
}

function triCopyPourFusion(arrayToSort) {
    c = arrayToSort.slice();
    for (var i = 0; i < arrayToSort.length; i++) {
        var min = c[0];
        var minIndex = 0;
        for (var j = 0; j < c.length; j++) {
            if (c[j] < min) {
                min = c[j];
                minIndex = j;
            }
        }
        c.splice(minIndex, 1);
        arrayToSort[i] = min;
    }
    return arrayToSort;
}

async function triSchell(arrayToSort) {
    //for la liste n (x,y,z)
    //for la liste n[0] / par la longeur du tableau = h
    //tant que j = n[0] * i < longeur du tableau (ou alors h fois)
    //on compare n[0] avec n[0]+j puis n[0]+j avec n[0]+j+j
    //si n[0] > n[0]+j on intervertie
    //on compare alors n[0]+j < n[0]-j si c'est le cas on intervertie tant que l'on est pas arrivé à 0
    var nList = [6, 4, 2, 1];
    var temp = 0;
    for (var i = 0; i < nList.length; i++) {
        var n = nList[i];
        for (var z = 0; z < n; z++) {
            for (var j = 0; j < (arrayToSort.length / n) - 1; j++) {
                if (arrayToSort[(j * n) + z] > arrayToSort[((j + 1) * n) + z]) {
                    temp = arrayToSort[(j * n) + z];
                    arrayToSort[(j * n) + z] = arrayToSort[((j + 1) * n) + z];
                    arrayToSort[((j + 1) * n) + z] = temp;
                    var x = j;
                    var c = true;
                    while (x > 0 && c == true) {
                        if (arrayToSort[(x * n) + z] < arrayToSort[((x - 1) * n) + z]) {
                            temp = arrayToSort[(x * n) + z];
                            arrayToSort[(x * n) + z] = arrayToSort[((x - 1) * n) + z];
                            arrayToSort[((x - 1) * n) + z] = temp;
                        } else {
                            c = false;
                        }
                        x--;
                    }
                }
            }
        }
    }
    return arrayToSort;
}

async function triABulle(arrayToSort) {

    var temp = 0;
    for (var i = 0; i < (arrayToSort.length - 1); i++) {
        // il faut switcher un par un a partir du debut
        // tant que l'on est pas à la fin - le i que l'on est
        j = 0;
        while (j < (arrayToSort.length - 1 - i)) {
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j + 1];
                arrayToSort[j + 1] = temp;
            }
            j++;
        }
    }

    return arrayToSort;
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
        while (j != arrayToSort.length) {
            if (selected > arrayToSort[j]) {
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