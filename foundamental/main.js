// alert('Hello JS');
document.write('Hello JavaScripts<br>');
document.write('<b>ยินดีตอนรับ</b>');

// var status = confirm("Are you ok?");
// // console.log(status)

// var msg = prompt("Insert you name","wittawat");
// console.log(msg)

// condition if

// var number = 50;
// if(number<=10){
//    var x='success';
// }
// else if(number<20){
//     var x='in between';
// }
// else{
//     var x='fail';
// }
// console.log(x);

var day = new Date().getDay();
switch(day){
    case 0:
        console.log("sunday");
        document.body.style.backgroundColor="red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor="yellow";
        break;
    case 2:
        console.log("Tuesday");
        document.body.style.backgroundColor="pink";
        break;
    case 3:
        console.log("Wednesday");
        document.body.style.backgroundColor="blue";
        break;
    
}
