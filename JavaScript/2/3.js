//Превращает сумму в четное число
function evenSum(sum){
    if(sum%2==0){
        console.log("Сумма = " + sum);
    }
    else{
        sum++;
        console.log("Сумма = " + sum);
    }
};

//Превращает сумму в нечетное число
function oddSum(sum){
    if(sum%2==0){
        sum++;
        console.log("Сумма = " + sum);
    }
    else{
        console.log("Сумма = " + sum);    
    }
};

function sumArr(arr, callback){
    let sum = 0;
    for(let i = 0; i< arr.length; ++i){
        sum+=arr[i];
    };

    callback(sum);
};

let arr = [1, 2, 3, 4, 5];

sumArr(arr, evenSum);

sumArr(arr, oddSum);