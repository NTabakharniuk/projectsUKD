//Знайти число в відсортованому масиві//
let arr = [4, 6, 9, 11, 13, 17, 20];

function binarySearch(array, num) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Marth.floor((low + high) / 2);
        if (aray[mid] === num) {
            return mid;
        } else if (array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(`Index: ${binarySearch(arr, 9)}`);



//Знайти число в невідсортованому масиві//
let arr = [7, 11, 5, 17, 9, 19, 15];

function binarySearch(array, num) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Marth.floor((low + high) / 2);
        if (aray[mid] === num) {
            return mid;
        } else if (array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(`Index: ${binarySearch(arr, 5)}`);

//Пошук об'єкту за віком. Масив відсортований за віком//
let arrPersons = [
  { name: 'Jack', age: 18 },
  { name: 'Mark', age: 30 },
  { name: 'David', age: 35 },
  { name: 'Karl', age: 41 },
];

arrPersons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  if (a.age == b.age) {
    return 0;
  }
});
console.log(arrPersons);
let sourch = function (arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (num === arr[mid].age) {
      return mid;
    } else if (num < arr[mid].age) {
      right = mid - 1;
    } else if (num > arr[mid].age) {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(`Number object: ${sourch(arrPersons, 41)}`);



//Пошук об'єкту за віком. Масив невідсортований за віком//
let arrPersons = [
  { name: 'Jack', age: 48 },
  { name: 'Mark', age: 18 },
  { name: 'David', age: 35 },
  { name: 'Karl', age: 21 },
];

arrPersons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  if (a.age == b.age) {
    return 0;
  }
});
console.log(arrPersons);
let sourch = function (arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (num === arr[mid].age) {
      return mid;
    } else if (num < arr[mid].age) {
      right = mid - 1;
    } else if (num > arr[mid].age) {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(`Number object: ${sourch(arrPersons, 21)}`);
