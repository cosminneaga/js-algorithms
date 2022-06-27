/*
6, 10, 11, 22, 4

22 > 4 = slide 22 to index 4
11 > 4 = slide 11 to index 3
10 > 4 = slide 10 to index 2
6 > 4 = slide 6 to index 1
insert 4 at index 0

4, 6, 10, 11, 22

########################################################################################

10, 11, 6, 22, 4

10, 11 already sorted - start at index 2
11 > 6 = slide 11 at index 2
10 > 6 = slide 10 at index 1
insert 6 at index 0

6, 10, 11, 22, 4

now start at index 3
22 remains at its position as is greater than each element of its left - start at index 4
22 > 4 = slide 22 at index 4
11 > 4 = slide 11 at index 3
10 > 4 = slide 10 at index 2
6 > 4 = slide 6 at index 1
insert 4 at index 0

4, 6, 10, 11, 22


*/

var insert_one = function (array, rightIndex, value) {

    for (var i = rightIndex; array[i] >= value; i--) {
        array[i + 1] = array[i];
        array[i] = value;
    }

    return array;
}

var given_insert = function (array, rightIndex, value) {
    for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
}


var insert = function (array, rightIndex, value) {

    var key;
    for (var key = rightIndex; key <= array.length && key >= 0 && (array[key] > value || array[key] === value); key--) {
        array[key + 1] = array[key];
    }
    array[key + 1] = value;
}


var insertionSort = function (array) {
    for (var i = 1; i < array.length; i++) {
        given_insert(array, i - 1, array[i]);
    }
}


var array = [3, 5, 7, 11, 13, 2, 9, 6];

given_insert(array, 4, 2);
console.log("Array after inserting 2:  " + array);

given_insert(array, 5, 9);
console.log("Array after inserting 9:  " + array);

given_insert(array, 6, 6);
console.log("Array after inserting 6:  " + array);

var insertionSortArray = [22, 11, 99, 88, 9, 7, 42];
insertionSort(insertionSortArray);
console.log("Array after sorting using insertionSort method:  " + insertionSortArray);

var insertionSortArrayNegative = [22, -11, 99, 88, -9, 7, -42];
insertionSort(insertionSortArrayNegative);
console.log("Array after sorting:  " + insertionSortArrayNegative);
