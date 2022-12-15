console.log('Hello World From HTML')

let arr = ['Viet Nam', 'Lao', 'Campuchia', 'Trung Quoc']

let i = 0;
// while (i < arr.length){
//     //if else
//     if(arr[i].length === 3){
//         console.log('Top server: ', i + 1, arr[i]);
//     }
//     else if(arr[i].length === 5){
//         console.log('Top server: ', i + 1, arr[i]);
//     }
//     else{
        
//     }
//     i++;
// }

//break stop the Loop
while (i < arr.length){
    if(arr[i] === 'Viet Nam'){
        console.log('Found it: ', i + 1, arr[i]);
        break;
    }
    console.log('>>> check i: ', i)
    i++;
}