const _ = require('lodash');


let item = {
    name:'Товар',
    sizes:{
        width:50,
        height:150
    },
    price:150
}

//Простое копирование
console.log(Object.assign({}, item));

//Глубокое копирование с использованием lodash
console.log(_.cloneDeep(item));