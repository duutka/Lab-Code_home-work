let arr = [1, 2, 3, 4, 5];

console.log("Исходный массив = " + arr);

arr.push(6);

console.log("push " + arr);

console.log("pop " + arr.pop());

arr.unshift(0);

console.log("unshift " + arr);

console.log("shift " + arr.shift());

//Удаляем из массива элемент по индексу
function delIndexArr(arr, index){
    arr.splice(index, 1);
    return arr
}

//Удаляем из массива элемент по значению
function delValArr(arr, value){
    let index = arr.IndexOf(value, 0);
    arr.splice(index, 1);
    return arr
}

arr = [1, 2, 3, 4, 5];

console.log(delIndexArr(arr, 3));

arr = [1, 2, 3, 4, 5];

console.log(delIndexArr(arr, 3));

