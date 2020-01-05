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

async function drawChart() {
    var randoms = giveTenRandom();
    //for (var i = 0; i < randoms.length; i++) {
    //    console.log(randoms[i]);
    //}
    //console.log(randoms);
    //triParInsertion(randoms);
    // var iterations = 10000;
    // console.time('Tri par insertion');
    // for (var i = 0; i < iterations; i++) {
    //     arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    //     triParInsertion(arrayToSortPerf);
    // }
    // console.timeEnd('Tri par insertion');

    // console.time('Tri par selection');
    // for (var i = 0; i < iterations; i++) {
    //     arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    //     triParSelection(arrayToSortPerf);
    // }
    // console.timeEnd('Tri par selection');

    // console.time('Tri a Bulle');
    // for (var i = 0; i < iterations; i++) {
    //     arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    //     triABulle(arrayToSortPerf);
    // }
    // console.timeEnd('Tri a Bulle');

    // console.time('Tri Schell');
    // for (var i = 0; i < iterations; i++) {
    //     arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    //     triSchell(arrayToSortPerf);
    // }
    // console.timeEnd('Tri Schell');
    // var arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    // console.log(await triBinary(arrayToSortPerf));

    var iterations = 1;
    var nbRandom = 10000;
    var diviseur = 1;
    console.time('Give Random');
    for (var i = 0; i < iterations; i++) {
        giveRandom(100000);
    }
    console.timeEnd('Give Random');
    //var arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    //console.log(arrayToSortPerf);
    //console.log(await triPeigne(arrayToSortPerf));
    //triRapide(arrayToSortPerf);
    //console.log(await triRapide(arrayToSortPerf));
    //console.log(await triRapide(giveRandom(nbRandom)));
    //randoms = await triRapide(randoms);
    //console.log(randoms);
    
    console.time('Tri par Insertion');
    for (var i = 0; i < iterations; i++) {
        // arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom / diviseur);
        triParInsertion(arrayToSortPerf);
    }
    console.timeEnd('Tri par Insertion');

    console.time('Tri par Selection');
    for (var i = 0; i < iterations; i++) {
        // arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom / diviseur);
        triParSelection(arrayToSortPerf);
    }
    console.timeEnd('Tri par Selection');

    console.time('Tri a Bulle');
    for (var i = 0; i < iterations; i++) {
        // arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom / diviseur);
        triABulle(arrayToSortPerf);
    }
    console.timeEnd('Tri a Bulle');

    
    console.time('Tri Schell');
    for (var i = 0; i < iterations; i++) {
        // arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom);
        arrayToSortPerf = await triSchell(arrayToSortPerf);
    }
    console.timeEnd('Tri Schell');

    console.time('Tri par Fusion');
    for (var i = 0; i < iterations; i++) {
        //arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom);
        arrayToSortPerf = await triParFusion(arrayToSortPerf);
    }
    console.timeEnd('Tri par Fusion');
    
    console.time('Tri Binary');
    for (var i = 0; i < iterations; i++) {
        arrayToSortPerf = giveRandom(nbRandom);
        //console.log(await triBinary(arrayToSortPerf));
        arrayToSortPerf = await triBinary(arrayToSortPerf);
    }
    console.timeEnd('Tri Binary');
    
    console.time('Tri Rapide');
    for (var i = 0; i < iterations; i++) {
        arrayToSortPerf = giveRandom(nbRandom);
        //console.log(await triBinary(arrayToSortPerf));
        arrayToSortPerf = await triRapide(arrayToSortPerf);
    }
    console.timeEnd('Tri Rapide');
    
    console.time('Tri Peigne');
    for (var i = 0; i < iterations; i++) {
        // arrayToSortPerf = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55, 48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
        arrayToSortPerf = giveRandom(nbRandom / diviseur);
        triPeigne(arrayToSortPerf);
    }
    console.timeEnd('Tri Peigne');
    

    //triABulle(randoms);
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

function giveRandom(x) {
    var randoms = [];
    for (var i = 0; i < x; i++) {
        randoms.push(Math.floor(Math.random() * Math.floor(x) + 1));
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

async function triPeigne(arrayToSort) {
    var aLen = arrayToSort.length;
    var div = dividePeigne(aLen);
    var tmp = 0;
    for (var j = 0; j < div.length - 1; j++) {
        var d = div[j]
        for (var i = 0; i + d < (aLen - 1); i++) {
            if (arrayToSort[i] > arrayToSort[i + d]) {
                tmp = arrayToSort[i + d];
                arrayToSort[i + d] = arrayToSort[i];
                arrayToSort[i] = tmp;
            }
        }
    }
    var sorted = 1;
    while (sorted != 0) {
        sorted = 0;
        for (var i = 0; i < (aLen - 1); i++) {
            if (arrayToSort[i] > arrayToSort[i + 1]) {
                tmp = arrayToSort[i + 1];
                arrayToSort[i + 1] = arrayToSort[i];
                arrayToSort[i] = tmp;
                sorted++;
            }
        }
    }
    return arrayToSort;
}

function dividePeigne(aLen) {
    var div = [];
    var actual = Math.floor(aLen / 1.3);
    div.push(actual);
    for (var i = 0; i < aLen; i++) {
        actual = Math.floor(actual / 1.3);
        if (actual <= 0) {
            break;
        }
        div.push(actual);
    }
    return div;
}

async function triRapide(arrayToSort) {
    //console.log(arrayToSort);
    var aLen = arrayToSort.length;
    var pivot = arrayToSort[aLen - 1];
    var leftA = [];
    var rightA = [];
    for (var i = 0; i < aLen - 1; i++) {
        if (arrayToSort[i] > pivot) {
            rightA.push(arrayToSort[i]);
        } else {
            leftA.push(arrayToSort[i]);
        }
    }
    if (arrayToSort.length <= 2 /*|| (leftA.length <= 0) && (rightA.length == 1) */) {
        arrayToSort = combineArrays(leftA, pivot, rightA);
        return arrayToSort;
    }
    /*
    if (leftA.length <= 0) {
        arrayToSort = combineArrays(leftA, pivot, rightA);
        return arrayToSort;
    }
    if (rightA.length <= 0) {
        
        arrayToSort = combineArrays(leftA, pivot, rightA);
        return arrayToSort;
    }*/

    //console.log('Left : ' + leftA);
    //console.log('Pivot : ' + pivot);
    //console.log('Right : ' + rightA);
    if (!(leftA.length <= 0)) {
        leftA = await (triRapide(leftA));
    }
    if (!(rightA.length <= 0)) {
        rightA = await (triRapide(rightA));
    }


    arrayToSort = combineArrays(leftA, pivot, rightA);
    return arrayToSort;
}

function combineArrays(left, p, right) {
    var r = [];
    if (left.length == 0 && right.length == 0) {
        r.push(p);
        return r;
    } else if (left.length == 0) {
        r.push(p);
        r = r.concat(right);
        return r;
    } else if (right.length == 0) {
        r = left.concat(p);
        return r;
    }
    r = left.concat(p);
    r = r.concat(right);
    return r;
}




async function triBinary(arrayToSort) {
    var copyArray = [];
    copyArray.push(arrayToSort[0]);
    var aLen = arrayToSort.length;
    for (var i = 1; i < aLen; i++) {
        //console.log(i);
        insertToSortedBinary(copyArray, arrayToSort[i]);
    }
    arrayToSort = copyArray;
    return arrayToSort;
}

function insertToSortedBinary(array, numberToInsert) {
    var aLen = array.length;
    if (numberToInsert > array[aLen - 1]) {
        array.push(numberToInsert);
        return array;
    }
    var found = false;
    var i = Math.floor(aLen / 2);
    var d = Math.floor(aLen / 2);
    //var v = 0;
    while (!found) {
        //console.log("inside found");
        //console.log(i);
        //console.log(array[i]);
        if (numberToInsert == array[i]) {
            array.splice(i, 0, numberToInsert);
            return array;
        }
        if (checkIfBetweenForBinary(array, numberToInsert, i)) {
            //console.log("inside binary check");
            array.splice(i, 0, numberToInsert);
            return array;
        }
        if (numberToInsert < array[i]) {
            //console.log("a");
            d = Math.floor(d / 2);
            i = i - d;
            if (d == 0) {
                i--;
            }
        } else if (numberToInsert > array[i]) {
            //console.log("b");
            d = Math.floor(d / 2);
            i = i + d;
            if (d == 0) {
                i++;
            }
        }
        //v++;
    }
    return array;
}

function checkIfBetweenForBinary(array, number, index) {
    //console.log(array);
    if (index == 0 || (array[index - 1] < number) && (array[index] > number)) {
        return true;
    }
    return false;
}

async function triParFusion(arrayToSort) {
    //arrayToSort = [48, 52, 33, 21, 86, 61, 49, 45, 89, 60, 55];
    // [1, 5] [6,  9] // 10
    // [1, 5] [6, 10] // 11
    // [1, 6] [7, 11] // 12
    var x = arrayToSort.length;
    //var nbDiv = (countFactors(x, 2));
    ///////////////////////////////////////////////////////////////////////////////////////

    if (x == x) {
        var proc = ['np'];
        var tmp = createIndexArray(0, arrayToSort.length - 1, proc);
        var tmp2 = createIndexArray(0, arrayToSort.length - 1, proc);
        var d = [];
        d.push(tmp);
        // var nbr = 0;
        while (Array.isArray(d) && d.length) {
            //console.log(d);
            if (!(d[d.length - 1].length == 3 || d[d.length - 1].length == 2 || d[d.length - 1][0] == 'p')) {
                d[d.length - 1][0] = 'p';
                proc = ['np'];
                tmp = createIndexArray(tmp[1], tmp[Math.floor((tmp.length) / 2)], proc);
                d.push(tmp);
                //proc = ['p'];
                tmp2 = createIndexArray(tmp2[Math.floor((tmp2.length) / 2) + 1], tmp2[tmp2.length - 1], proc);
                d.push(tmp2);
                tmp = tmp2;
            } else if (d[d.length - 1].length == 2) {
                d.splice(d.length - 1, 1);
            } else if (d[d.length - 1].length == 3 || d[d.length - 1][0] == 'p') {
                arrayToSort = compareFromToIndex([d[d.length - 1][1]], [d[d.length - 1][d[d.length - 1].length - 1]], arrayToSort);
                d.splice(d.length - 1, 1);
                tmp2 = d[d.length - 1];
                tmp = tmp2;
            }
            // nbr++;
        }
        /*
        for (var i = 0; i < nbDiv; i++) {
            // console.log(i);
            if (!(d[d.length - 1].length == 3 || d[d.length - 1].length == 2)) {
                console.log('a');
                proc = ['np'];
                tmp = createIndexArray(tmp[1], tmp[Math.floor((tmp.length) / 2)], proc);
                d.push(tmp);
                proc = ['p'];
                tmp2 = createIndexArray(tmp2[Math.floor((tmp2.length) / 2) + 1], tmp2[tmp2.length - 1], proc);
                d.push(tmp2);
                tmp = tmp2;
            }
            if (d[d.length - 1].length == 3) {
                console.log('b');
                arrayToSort = compareIndex([d[d.length - 1][1]], [d[d.length - 1][2]], arrayToSort);
                // console.log(arrayToSort);
                d.splice(d.length - 1, 1);
                i--;
            } else if (d[d.length - 1].length == 2) {
                console.log('c');
                d.splice(d.length - 1, 1);
            }
            console.log(d);
            /*
            if ((d[d.length - 1].length == 1 && d[d.length - 2].length == 1) || (d[d.length - 1].length == 1 && d[d.length - 2].length == 2)) {
                arrayToSort = compareIndex([d[d.length - 1]], [d[d.length - 2]], arrayToSort);
                d.splice(d.length - 3, 3);
                i--;
                console.log(d[d.length - 1]);
                tmp = d[d.length - 1];
                tmp2 = d[d.length - 1];
            }
            */
        //}

    }

    ///////////////////////////////////////////////////////////////////////////////////////
    //console.log(arrayToSort);
    ///////////////////////////////////////////////////////////////////////////////////////

    return arrayToSort;
}

function compareIndex(i0, i1, array) {
    if (array[i1] > array[i0]) {
        var t = array[i0];
        array[i0] = array[i1];
        array[i1] = t;
    }
    return array;
}

function compareFromToIndex(i0, i1, array) {
    i0 = parseInt(i0[0]);
    i1 = parseInt(i1[0]) + 1;
    c = array.slice(i0, i1);
    cLen = c.length;
    for (var ix = 0; ix < cLen; ix++) {
        var min = c[0]
        var minIndex = 0;
        for (var i = 1; i < c.length; i++) {
            if (c[i] < min) {
                min = c[i];
                minIndex = i;
            }
        }
        c.splice(minIndex, 1);
        array[ix + i0] = min;
    }

    // for (var i = 0; i < (cLen - 1); i++) {
    //     var min = c[0];
    //     var minIndex = 0;
    //     for (var j = 1; j < (cLen); j++) {
    //         if (c[j] < min) {
    //             min = c[j];
    //             minIndex = j;
    //         }
    //     }
    //     c.splice(minIndex, 1);
    //     array[i0] = min;
    // }
    return array;
}

function countFactors(x, n) {
    var f = 0;
    while (x > n) {
        x /= n;
        f++;
    }
    return f;
}

function createIndexArray(iMin, iMax, proc) {
    var a = proc.slice();
    var x = 1;
    for (var i = iMin; i < (iMax + 1); i++) {
        a[x] = i;
        x++;
    }
    return a;
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

function logOnThePage(text) {
    var txt = document.createTextNode(text);
    document.body.appendChild(txt);
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
        //await sleep(200);
        //reDrawChart(arrayToSort);
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
            //await sleep(200);
            //reDrawChart(arrayToSort);
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