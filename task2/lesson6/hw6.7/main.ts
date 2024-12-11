// #5hqyKTfmc
// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction

// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums: number[] = [11, 21, 3];

function sortNums(array: number[], direction: string): number[] {
    return array.sort((a, b) => {
        if (direction === 'ascending') {
             return a - b;
        }

        if (direction === 'descending') {
            return b - a;
        }
    })
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

