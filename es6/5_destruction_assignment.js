// var scores = [55,65,82]
// var s1 = scores[0]
// var s2 = scores[1]
// console.log(s1,s2);


//ES6 Destructuring

const scores = [55,65,82]
// const [s1,s2] = scores
const [s1,,s3] = scores
// console.log(s1,s2);
console.log(s1,s3);

// นอกจากดึง จาก array ยังดึงจาก key ใน object ใน function ได้ด้วย

function createUser(){
    return {fname:"wittawat", age:37}
}
const{fname,age} = createUser()
console.log(fname,age);