export default class Users{ // ใส่ defualt มาเรียกได้ทั้งหมด ไม่ต้องใช้ * ใช้ได้ต่อเมื่อมี class เดียวใน 1 file ส่วนใหญ่จะเป็นแบบนี้
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log('hi '+ this.name);
    }
}

