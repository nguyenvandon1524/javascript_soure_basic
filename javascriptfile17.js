console.log('Hello World From Javascript')

//callback
let sum = (a,b, callback) =>{
    let total = a + b;
    callback(total);
}
let printSum = (massage) => {
    console.log('Check sum: ', massage)
}
sum(6, 15, printSum);


//setTimeout
let sumT = (a,b, callback) =>{
    let total = a + b;
    setTimeout(() => {
        callback(total);
    }, 5000);
}
let printSumT = (massage) => {
    console.log('Check sum: ', massage)
}
sumT(6, 15, printSumT);


//SetInterval
let sumI = (a,b, callback) =>{
    let total = a + b;
    let i = 0;
    let timer = setInterval(() => {
        callback(total);
        i++;
        if(i == 5){
            clearInterval(timer)
        }
    }, 1000);
}
let printSumI = (massage) => {
    console.log('Check sum: ', massage)
}
sumI(6, 15, printSumI);