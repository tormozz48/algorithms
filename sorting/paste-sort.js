// O(n^2)

const array = [3, 2, 6, 1, 4, 3, 3, 10, 0, 7, 5, 8];

function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr.splice(i, 1);
                arr.splice(j, 0, temp);
                break;
            }
        }
    }

    return arr;
}

console.log(sort(array));