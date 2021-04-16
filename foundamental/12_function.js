// การสร้าง Function ไม่มีการรับ parameter ไม่ค่อยมีประโยชน์

function wakeup(){
    console.log('Hey! wake up now');
}

// การเรียกใช้งาน fucntion
wakeup();


// การสร้าง Function มีการรับ parameter 
function sayHello(name){
    console.log('Hello '+ name);
}
sayHello("Wittawat");


// การสร้าง Function มีการรับ parameter แล้วส่งออกค่านั้นๆ ด้วย return
function calArea(width,height){
    var area = width*height;
    return area;
};
console.log('พื้นที่คือ '+calArea(2,3));


// function แบบ expression เป็นการเก็บ function ลงในตัวแปร แล้วเรียกผ่านตัวแปรอีกที ใช้ใน java สมัยใหม่ทั้งหมด ==> Anonymus function การทำแบบนี้จะทำเพื่อการสามารถโยนต่อกันเป็นทอดๆ ได้ เพื่อนำไปใช้ที่อื่นๆ ได้ง่าย

var action = function(a,b){ // Anonymus function
    return a*b;
}
var result = action(2,3);

console.log('ค่าคือ '+action(2,3));
console.log('ค่าคือ '+result);