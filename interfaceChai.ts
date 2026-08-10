interface Chai{
    flavor:string;
    price:number;
    milk?:boolean
}
const masala:Chai= {
     flavor:"masala",
     price:20
}

interface shop {
    readonly id:number;
    name:string
}
const s:shop ={
    id:2,
    name:"masala"
}
//s.id=23 //error readonly


interface discountCalculator{
    (price:number):number
}
const apply50: discountCalculator = (p) => p*0.5


interface teaMachine{
    start() : void ;
    stop(): void
}
const machine: teaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}


interface chaiRating {
    [flavor:string] : number
}
const ratings:chaiRating = {
    masala:4.5,
    ginger:4.5
}


interface User {
    name:string
}
interface User{
    age:number
}
const u:User = {
    name:"Hitesh",
    age:34
}


interface A {a:string}
interface B {b:string}
interface C extends A,B {} //same as above user
