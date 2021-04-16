//join array การนำสมาชิกมาต่อกัน

const numbers = [10,20,30,40]
console.log(numbers.join()); // ถ้าไม่ใส่อะไรจะเป็นลูกน้ำ
console.log(numbers.join('-')); //ใส่อะไรเข้าไประหว่างเลขกำหนดได้
console.log(numbers.join(' ')); // ช่องว่างก็ได้

// หาผลรวมสามาชิก
let result = 0
for(let i=0;i<numbers.length;i++){
    result += numbers[i]
}
console.log(result);

// หรือ ใช้ .reduce เลข 0 คือ ค่าเริ่มต้น 
const result_data = numbers.reduce((sum,number)=>{
    return sum + number
},0)
console.log(result_data);

//.concat array เป็นการรวม array
const myarr1 = [5,6,7]
const myarr2 = [8,9,10]
// const myresult = myarr1 + myarr2 // ทำแบบนี้จะออกมาเป็น str โดยจะเอาไปใช้ต่อไม่ได้ 
const myresult =myarr1.concat(myarr2)
console.log(myresult);

//.push array เป็นการเติมข้อมูลเข้าไป 
const mutate = ['red','green']
const count = mutate.push('blue')
console.log(mutate);
console.log(count); //=3
console.log(mutate);// การ push จะทำให้ตัวตั้งต้นเปลี่ยนไปด้วยไม่เหมือนกับ concat เช่น mutate กลายเป็น 3 ค่าเพราะถูก push เข้าไป

// .pop ลบสมาชิก ตัวสุดท้าย 
const pop = mutate.pop()
console.log(pop); // = blue
console.log(mutate);// = ['red','green']

// .shift ดึงตัวแรกออก 
const shift = mutate.shift()
console.log(mutate);
console.log(shift);

// .unshift เพิ่มสามาชิกกลับไปที่ตัวแรก
const unshift = mutate.unshift("red")
console.log(mutate);
mutate.unshift("yellow")
console.log(mutate);
console.log(unshift); // ได้ค่ากลับมาเป็น int จำนวนที่ใส่กลับเข้าไป ในกรณีนี้ = 2

//.splice ดึงข้อมูลแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ['red','green','0','1','blue']
// const splice = mutate_arr.splice(0) // การกำหนดตำแหน่งเริ่ม remove จากตัวที่ 0 =[]
// const splice = mutate_arr.splice(1) // ตั้งแต่ 1 เป็นต้นไปจะลบออก = ['red']
// const splice = mutate_arr.splice(1,1) // เริ่มตัดจากตัวที่ 1 และลบออกแค่ 1 =["red", "0", "1", "blue"]
// const splice = mutate_arr.splice(2,2) // ["red", "green", "blue"]
const splice = mutate_arr.splice(2,2,'brown') // ลบแล้วใส่เข้าไปกี่ตัวก็ได้ ["red", "green", "brown", "blue"]
console.log(mutate_arr);

//.slice การเพิ่มค่าไปในตำแหน่งที่อยากได้ 
const mutate_arr1 = ['red','green','0','1','blue']
// const slice = mutate_arr1.slice(1)
// const slice = mutate_arr1.slice(1,2) // ["green"]
// const slice = mutate_arr1.slice(1,3) //["green", "0"] ตัดเหลือ ตั้ง 1 ถึง 3 แต่ไม่เอา 3 นะ
const slice = mutate_arr1.slice(1,4) //["green", "0", "1"]
console.log(mutate_arr1);
console.log(slice);

// avoid ป้องกัน array เปลี่ยนค่า เวลาทำค่าต่างๆ ใน array
const fruits= ['banana','apple','mango']

const new_fruits =[
    // ...fruits,'durain' // เราสามารถเพิ่มแบบใช้ ... หรือ spread 1ได้ 
    ...fruits.slice(0,1),
    'durain',
    ...fruits.slice(1) // คือเอา durain ไปแทรกระหว่าง index 0,1
]
console.log(new_fruits);
console.log(fruits); // ต้นทางไม่เปลี่ยนแปลง


// การวนลูป array
const num_arr = ['one','two','three']
num_arr.forEach(result=>{
    console.log(result);
}) // ข้อเสียของ forEach คือ ไม่สามารถหยุดระหว่างทางได้ ต้องทำจนหมด array จึงหยุดได้

// for of 
for(const v of num_arr){
    console.log(v);
}
for(const v of num_arr){
    if(v=='two'){
        break;
    } // เจอ 'two' ให้หยุด
    console.log(v);
}

//การค้นหา ตำแหน่ง array 
const num_arrays =[1,4,8,10,8,11,12]
// const index = num_arrays.indexOf(10)
const index = num_arrays.indexOf(8) // ถ้ามีเลขซ้ำกัน จะอ่านเจอตัวแรกแล้วหยุดเลย
console.log(index);

// findindex
const found = num_arrays.findIndex(e=>e%4 ==0) //ตัวแรกที่ หาร 4 ลงตัว
console.log(found);

// ถ้าจะเอาครบให้ใช้ วนลูปช่วย