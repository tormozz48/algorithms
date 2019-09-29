// O(n^2)

const array = [3, 2, 6, 1, 4, 3, 3, 10, 0, 7, 5, 8];

function sort(arr) {
    const L = arr.length;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 1; i < L; i++) {
            if (arr[i] < arr[i-1]) {
                const temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
                isSorted = false;
            }
        }
    }

    return arr;
}

console.log(sort(array));