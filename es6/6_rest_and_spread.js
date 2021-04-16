//Spread

const arr =[4, 5, 6]
const append = [1, 2, 3, ...arr] // ... คือ spread operator

console.log(append);

const arr1 =['a','b','c']
const arr2 =['d','e','f']
arr1.push(...arr2) // คือการนำ arr2 ใส่เข้าไปใน arr1
console.log(arr1);

function add(x,y,z){
    return x+y+z
}
const number = [1,2,3]
// const sum = add(1,2,3)
// const sum = add(number)
const sum = add(...number) // สามารถใช้ในการโยนค่าทีละตัว เข้าไปใน array
console.log(sum);


//Rest operator 
function multiply(multiplier, ...array){
    console.log(array); // = 10,20,30
    return array.map(e=>multiplier*e)
}
const result = multiply(2,10,20,30)
console.log(result); // = 20,40,60