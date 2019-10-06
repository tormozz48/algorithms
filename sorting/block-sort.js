// O(NlogN)
const countSort = require('./count.sort');

const array = [3, 2, 6, 1, 4, 3, 3, 10, 0, 7, 5, 8];

function sort(arr) {
    const blocks = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const delta = max - min;

    for (let i = 0; i < arr.length; i++) {
        let section = 0;
        if (arr[i] < min + delta / 3) {
            section = 0
        } else if (arr[i] < min + 2 * delta / 3) {
            section = 1
        } else {
            section = 2;
        }

        blocks[section] = blocks[section] || [];
        blocks[section].push(arr[i]);
    }

    return blocks.reduce((acc, item) => {
        return acc.concat(countSort(item));
    }, []);
}

console.log(sort(array));