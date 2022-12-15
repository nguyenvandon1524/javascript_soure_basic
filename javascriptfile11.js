console.log('Hello World From HTML')

let arr = ['Neymar', 'Ronaldo', 'Messi', 'MPappe'];

//For
for(let i = 0; i < arr.length; i++){
    console.log('Top: ', i + 1, arr[i])
}

//While
let i = 0
while(i<arr.length){
    console.log('Top: ', i+1, arr[i]);
    i++;
}

//Do-While
let a = 0
do {
    console.log('Top: ', a+1, arr[a]);
    a++;
}
while(a < arr.length);