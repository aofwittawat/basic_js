// การสร้างข้อมูล object สามารถเก็บ Anonymous function ได้
var person = {
    firstname:"Wittawat",
    lastname:"Boonyanuwat",
    age:35,
    gender:"male",
    fullName: function(){
        return this.firstname+" "+this.lastname;
    }
}

// การเข้าถึง
console.log(person.firstname);      // แบบที่ 1 
console.log(person['lastname']);    // แบบที่ 2 แบบนี้จะง่ายถ้ามีหลายชั้น
console.log(person.fullName());     // แบบที่ 3 เรียก function ออกมาก็ได้


// nasted objected คือการซ้อนกันมากกว่า 1 ชั้น
var user ={
    id: "1",
    email:"aofwittawat@gmail.com",
    personinfo:{
        name: "John",
        address:{
            line1 : "Bangkok",
            line2 : "Nakornayork",
            zipcode: "10260"  
        },
    data : ['xxx','yyy','zzz']
    }
}

// การเข้าถึง
console.log(user.personinfo.address.line2);