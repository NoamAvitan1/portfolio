const obj = {
    name : "noam",
    city : "yavne",
}
console.log(obj)
getData(obj);

function getData(){
 obj.id = 1;
}

console.log(obj);