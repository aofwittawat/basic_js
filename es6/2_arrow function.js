// ES5
var greet = function(name,msg){
    return msg + name
};
console.log(greet("wittawat","How ar you?,"));

//ES6 ใช้ => แทน function
var greet = (name,msg)=>{
    return msg + name
};
console.log(greet("wittawat","How ar you?,"));

// ลดคำว่า return ออก ใช้ได้เฉพาะเวลา return แค่ค่าเดียว

var greet = (name,msg)=>msg+name
console.log(greet("wittawat","How ar you?,"));

// ลดได้อีก ถ้ารับแค่ 1 parameter เดียว
var greet = msg=>msg
console.log(greet("How ar you?,"));

var square = x=>x*x
console.log(square(3));