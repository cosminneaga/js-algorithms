/**
 * 1. Let `min=0` and `max=n-1`
 * 2. Compute `guess` as the average of `max` and `min`, rounded down(so that it is an integer)
 * 3. If `array[guess]` equals `target`, then stop. You found it! Return `guess`
 * 4. If the `guess` is too low, that is, `array[guess] < target`, then set `min=guess+1`
 * 5. Otherwise, the `guess` is too high. Set `max=guess-1`
 * 6. Go back to step 2
 */




function sort_binary(array, target) {
    let start = process.hrtime()


    let min = 0
    let max = array.length - 1


    do {
        let guess = Math.floor((min + max) / 2)
        if (array[guess] === target) {
            console.log('Found:', array[guess]);
            break
        }
        if (array[guess] < target) {
            min = guess + 1
        } else {
            max = guess - 1
        }
    } while (min <= max)


    let stop = process.hrtime(start)
    console.log(`Executed in: ${(stop[0] * 1e9 + stop[1]) / 1e9} seconds`)
}


function sort_linear(array, target) {
    let start = process.hrtime()

    for (const n of array) {
        if (n === target) {
            console.log('Found: ', n);
            break
        }
    }

    let stop = process.hrtime(start)
    console.log(`Executed in: ${(stop[0] * 1e9 + stop[1]) / 1e9} seconds`)
}



const elements = Array.from({ length: 1000000 }, (_, i) => i + 1)


console.log('BINARY SEARCH: ')
sort_binary(elements, 1)
sort_binary(elements, 20)
sort_binary(elements, 5674)
sort_binary(elements, 999999)
sort_binary(elements, 756454)
console.log()
console.log('LINEAR SEARCH: ')
sort_linear(elements, 1)
sort_linear(elements, 20)
sort_linear(elements, 5674)
sort_linear(elements, 999999)
sort_linear(elements, 756454)
