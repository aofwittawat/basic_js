class Person{
    //สร้าง constructor
    constructor(name){
        this.name =name
    }
    sayHi(){
        console.log("Hello " + this.name);
    }
    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }
}

//สร้าง object 

const p = new Person('Wittawat')
console.log(p.name);
p.sayHi()
p.gender = "male"
console.log(p.gender);