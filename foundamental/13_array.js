// Basic Array
// name จะเป็นคำสงวนของ Javascript
var nickname =['John','Joe','Jane','Jack'];
var fruits = new Array('Apple','Banana','Orange','Mango');
console.log(nickname);
console.log(fruits);
console.log(nickname[0]);
console.log(nickname[0],nickname[2]);

// เปลี่ยนค่าสมาชิก
nickname[1] = 'Jenny';
console.log(nickname);

//เพิ่มสมาชิกใหม่
nickname[4] = 'Aof';
console.log(nickname);

//for เรียกสมาชิก
for(var i=0;nickname[i];i++){
    console.log(nickname[i]);
};

// การวนลูปด้วย function forEach เป็น function ที่เก็บค่า array ได้
fruits.forEach(myFruit);

function myFruit(value){
    console.log(value);
};