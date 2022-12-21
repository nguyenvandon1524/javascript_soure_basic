console.log('Hello World From Javascript')

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

const array2 = [1, 4, 21, 30, 100000];
array2.sort((item1, item2) => item1 - item2);
console.log(array2);
// expected output: Array [1, 4, 21, 30, 100000]

const array3 = [1, 4, 21, 30, 100000];
let arr = [];
array3.sort((item1, item2) => {
    console.log(array3)
    return item1 - item2;
});
console.log(array3);
// expected output: Array [1, 4, 21, 30, 100000]

