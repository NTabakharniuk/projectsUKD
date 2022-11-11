function compareNumbers(a, b) {
    return a - b;
}

/* Сортування слів */ 
let lettersort = ['home', 'work', 'relax', 'hollidays', 'job', 'city']
lettersort.sort()
console.log(lettersort);


/* Сортування від меншого до більшого значення */
let NumberSortMinToMax = [1, 67, 334, 0, 239, 2, 34, 98, 34, 2334]
NumberSortMinToMax.sort(compareNumbers)
console.log(NumberSortMinToMax);


/* Сортування від більшого до меншого значення */
let NumberSortMaxToMin = [89, 6, 0, 94, 54, 50, 23, 34]
NumberSortMaxToMin.reverse(NumberSortMaxToMin.sort(compareNumbers))
console.log(NumberSortMaxToMin);