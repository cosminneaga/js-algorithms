// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            console.log('Low', lowHalf[i], 'index', i);
            array[k] = lowHalf[i]
            i++
        } else {
            console.log('High', highHalf[j], 'index', j);
            array[k] = highHalf[j]
            j++
        }
        k++
    }

    /* console.log(lowHalf, 'index', i);
    console.log(highHalf, 'index', j);
    console.log('q', q);
    console.log('k', k); */


    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while (i < lowHalf.length) {
        array[k] = lowHalf[i]
        i++
        k++
    }
    while (j < highHalf.length) {
        array[k] = highHalf[j]
        j++
        k++
    }

};


// Takes in an array and recursively merge sorts it
var mergeSort = function (array, p, r) {

    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        console.log(1, 'ARRAY', array);
        mergeSort(array, q + 1, r);
        console.log(2, 'ARRAY', array);
        merge(array, p, q, r);
        console.log(3, 'ARRAY', array);

    }

};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);

var array = [14, -7, 3, -12, 9, -11, -6, 2];
mergeSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);





console.log('#### MERGE ####');
console.log(1);
var array = [3, 7, 12, 14, 2, 6, 9, 11];
console.log("Array before merging: " + array);
merge(array, 0, Math.floor((0 + array.length - 1) / 2), array.length - 1);
console.log("Array after merging: " + array);

console.log(2);
var array = [3, 7, 0, 14, -2, -6, 9, 11];
console.log("Array before merging: " + array);
merge(array, 0, Math.floor((0 + array.length - 1) / 2), array.length - 1);
console.log("Array after merging: " + array);