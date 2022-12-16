console.log('Hello World From Javascript')

let sum = (a,b) => {
    return a + b
}

console.log('Check sum: ', sum(6, 20))

let obj = {
    name: 'Don',
    age: '23',
    address: '187/54/5 Tan Binh',
    //method
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    },
    getAddress: function() {
        return this.address;
    }
}
console.log('Check get name: ', obj.getName())
console.log('Check get age: ', obj.getAge())
console.log('Check get address: ', obj.getAddress())