// ปัญหาของการใช้ var คือไม่เคารพ scope of level
// var fname = "jane"
// {
//     var fname = "jeanny"
//     console.log(fname);
// }
// console.log(fname);

// function a(){
//     var fname = "jeanny"
//     console.log(fname);
// }

// console.log(fname)

// ตัวอย่างการใช้ let
// var fullname;
// var fullname;
// console.log(fullname);

// let fullname;
// let fullname; let ไม่สามารถประกาศซ้ำได้
// console.log(fullname);

// let fname = "jane"
// {
//     let fname = "jeanny"
//     console.log(fname);
// }
// console.log(fname);

// ตัวอย่างการใช้ const
// const firstname ="wittawat";
// firstname = "alena"
// console.log(firstname);