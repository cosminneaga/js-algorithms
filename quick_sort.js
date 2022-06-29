// Swaps two items in an array, changing the original array
var swap = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function (array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j. 
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    var q = p,
        j = p;
    for (var i = j; i < r; i++) {
        if (array[i] <= array[r]) {
            swap(array, i, q);
            q++;
        }
    }

    swap(array, r, q);
    return q;
};


var quickSort = function (array, p, r) {

    if (p < r) {

        var q = partition(array, p, r)
        quickSort(array, p, q - 1)
        quickSort(array, q + 1, r)

    }

};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);

var array = [9, 7, 5, 11, 12, 0, 14, -3, -10, 6];
quickSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);





var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
console.log("Array before partitioning: " + array);
var q = partition(array, 0, array.length - 1);
console.log('q: ', q)
console.log("Array after partitioning: " + array);


var array = [9, -7, 5, 11, -12, 2, 14, 3, 10, -4, 6];
console.log("Array before partitioning: " + array);
var q = partition(array, 0, array.length - 1);
console.log('q: ', q)
console.log("Array after partitioning: " + array);