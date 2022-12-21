console.log('Hello World From Javascript')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < arr.length;i++){
//     arr[i] = arr[i] * arr[i];
// }

//vong lap loop
let mapArr = arr.map((item, index) => {
    
    return(
        `<td>${item} - ${index}</td>`
    ); 
});
console.log('Check value i: ', arr)
console.log('Check value i: ', mapArr)