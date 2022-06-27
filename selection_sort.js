/*
22, 11, 10, 6, 4
4, 22, 11, 10, 6
4, 6, 22, 11, 10
4, 6, 10, 22, 11
4, 6, 10, 11, 22
*/


const animals = ['gnu', 'zebra', 'antelope', 'aardvark', 'yak', 'iguana']

animals.sort()
console.log(animals);


// swap 
var swap_ini = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

// minimum

var indexOfMinimum_ini = function (array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    for (var i = startIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }

    return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14];
var index = indexOfMinimum_ini(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
console.log("The index of the minimum value of the subarray starting at index 2 is " + index + ".");


/* ------------------------ selection sort algorithm ------------------------ */
var swap = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function (array) {

    for (var i = 0; i < array.length; i++) {
        var min = indexOfMinimum(array, i);
        swap(array, i, min);
    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

var array = [22, 11, -99, 88, 9, -7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);