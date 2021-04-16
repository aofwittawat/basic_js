//for loop
var num;
//   start stop step
for(num=1;num<=10;num++){
    if(num==5){
        console.log("middle");
    }
    console.log(num)
};

//while loop ใช้เมื่อแต่ข้อมูลจาก Json file

var i=0;
while(i<=5){
    console.log(i);
    i++; // i = i+1
}

//while infenity loop ใช้พวกวนภาพซ้ำ
// while(true){
//     console.log(i);
//     i++;
// };

// *
// **
// ***
// ****
// *****
// ******
var a =1;
while(a<=5){
    console.log('*'.repeat(a)); //คำสั่ง repeat คือ ทำ a ซ้ำ
    a++;
};

var j =5;
while(j>=0){
    console.log('*'.repeat(j)); //คำสั่ง repeat คือ ทำ a ซ้ำ
    j--;
};