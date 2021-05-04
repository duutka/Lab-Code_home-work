let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise
    .then(() => {
        console.log("Успешно!");
    })
    .catch(() => {
        console.log("Неуспешно!");
    })
    .finally(() => {
        console.log("Все равно выполнится!");
    });