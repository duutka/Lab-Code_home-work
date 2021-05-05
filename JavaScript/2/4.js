//нахождение точки в квадрате 1x1
const promise = new Promise(function(resolve, reject) {
    const x = Math.random()*10;
    const y = Math.random()*10;

    if( x < 1 && y < 1 && x >0 && y >0){
        setTimeout(
            resolve([x, y])   
        , 1000);
    }
    else{
        setTimeout(
            reject([x, y])   
        , 1000);
    }
});

promise
    .then((arr) => {
        console.log("Точка находится в квадрате!");
        console.log("X = " + arr[0], "Y = " + arr[1]);
    })
    .catch((arr) => {
        console.log("Точка не находится в квадрате!");
        console.log("X = " + arr[0], "Y = " + arr[1]);
    })
    .finally(() => {
        console.log("Конец");
    });