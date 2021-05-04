let user = {
    first_name:"Dmitriy",
    last_name:"Pischasov",
    id:"3f4d2dsID"
};

user.value = 123;

console.log(user);

delete user.last_name;

console.log(user);

for(let key of Object.keys(user)){
    console.log("Key = " + key);
};

for(let value of Object.values(user)){
    console.log("Value = " + value);
};

for(let item of Object.entries(user)){
    console.log("Key = " + item[0] + ", Value = " + item[1]);
};
