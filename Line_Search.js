let arr = [3, 6, 8, 5, 89, 8, 61];
 function lineSearch (value,arr) 
 {
    let position = -1;
    let index = 0;
    let indexList = [];
    while (index < arr.length) 
    {
        if (arr[index] == value) 
        {
            position = index;
            indexList.push(index);
        }
        index++;
    }
    for (let i = 0; i < indexList.length; i++) 
    {
        console.log(indexList[i]," ");
    }

 }
 lineSearch(8,arr);
