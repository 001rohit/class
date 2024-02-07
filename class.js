class student{
    constructor(name,age){
        this.name = name
        this.age = age
           }
    hellow(){
        console.log(`hellow ${this.name} and your age is ${this.age}`)
    }
    
}
let a =new student("Rohit",26)
a.hellow()

let b =new student("Yogesh",27)
b.hellow()

let c =new student("mohit",25)
c.hellow()
