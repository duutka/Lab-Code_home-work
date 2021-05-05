function indexArr(arr, target){
    let temp = 0;
    let index = 0;
    let tempArrInd = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<=target){
            temp = arr[i];
            index = i;
            for(let j=0; j<arr.length; j++){
                if(((temp + arr[j])===target)&&(j!=index)){
                    tempArrInd[0] = index;
                    tempArrInd[1] = j;
                    return tempArrInd;
                }
            }
        }
    }
    return "Не найдено"
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [2, 7, 11, 15];
target = 18;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [2, 7, 11, 7];
target = 14;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [2, 7, 3, 7];
target = 10;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [0, 4, 0, 4];
target = 0;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [1, -4, 4, 6];
target = 0;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [1, 1, 1, 1];
target = 2;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));

nums = [1, 1, 1, 1];
target = 3;

console.log("Array = " + nums + " target = "+ target + " answer = " + indexArr(nums, target));
