console.log('Hello World From Javascript')

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
    { name: 'Don', age: 23 },
    { name: 'Dinh', age: 23 },
    { name: 'Dang', age: 22 },
    { name: 'De', age: 49 },
]
//filter, find

let filter = arr.filter((item, index) => {
    //console.log('Check filter: item: ', item, 'index: ', index)
    return item && item.age === 23;
});

console.log(filter);