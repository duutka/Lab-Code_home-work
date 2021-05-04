let user = {
    name:'John'
}

let admin = user //копируется ссылка

console.log(user); // {name: 'John'}

console.log(admin); // {name: 'John'}

admin.name = "Dmitriy";

console.log(user); // {name: 'Dmitriy'}

console.log(admin); // {name: 'Dmitriy'}
