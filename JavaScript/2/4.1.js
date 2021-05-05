(async () => {
    try{
        const promise = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const x = Math.random()*10;
                    const y = Math.random()*10;
                
                    if( x < 1 && y < 1 && x >0 && y >0){
                        resolve([x, y]);
                    }
                    else{
                        reject("Точка не находится в квадрате");
                    }
                }, 2000);
            });
        };
        console.log("Ждем...");
        const result = await promise();
        console.log("Точка находится в квадрате x = " + result[0] + " y =  "+ result[1]);
    }
    catch(error){
        console.log(error)
    }
})();