//import จาก 8 กับ say.js
//1
import {sayHi,sayBye} from './say.js'
sayHi("john")
sayBye("john")
//2 * as ชื่อเล่น
import * as say from './say.js'
say.sayBye("Bob") 
say.sayHi("Bob")
//3
import  {sayHi as sh,sayBye as sb} from './say.js'
sh("Alena")
sb("Alena")
//4 มาแบบ class ที่มีการกำหนด defualt
import Users from './User.js'
const obj = new Users("Maew")
console.log(obj.name);
obj.sayHi()
