// O(NlogN)

const array = [3, 2, 6, 1, 4, 3, 3, 10, 0, 7, 5, 8];

function sort(arr) {
    const countArr = arr.reduce((acc, item) => {
        acc[item] = acc[item] || 0;
        acc[item]++;
        return acc;
    }, []);

    const result = [];
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i]) {
            for (let j = 0; j < countArr[i]; j++) {
                result.push(i);
            }
        }
    }

    return result;
}

console.log(sort(array));