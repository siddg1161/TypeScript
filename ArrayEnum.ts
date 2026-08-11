//Array
const chaiFlavours: string[] = ["Masala", "Adrak"]
const price: number[] =[24,36]

const rating: Array<number> = [4.5,5.0]

type Chai ={
    name:string;
    price:number
}
const Menu:Chai[] =[
    {name:"Masala", price:20},
    {name:"Adrak",price:24}
]

const cities:readonly string [] = ["Delhi","Jaipur"]

const table: number[][] =[
    [1,2,3],
    [4,5,6]
]

//Tuple
let chaiTuple : [string,number];
chaiTuple = ["masala",23]
chaiTuple = ["adrak",24]


let infoTuple : [string,number,boolean?];
infoTuple=["sid",32]

const location : readonly [number,number] = [24.234,23]

//named tuple
const chaiItems : [name:string, price:number] = ["Masala",24]


//Enumss
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size=cupSize.LARGE

enum status {
    PENDING=100,
    SERVED, //auto assign with 101
    CANCELLED //same 102
}

enum chaiType {
    MASALA="masala",
   GINGER="ginger"
}
function makeChai(type:chaiType)
{
    console.log(`Making: ${type}`)
}
makeChai(chaiType.MASALA)

enum randomEnum {
    ID=1,
    NAME="Chai"
}

const enum Sugars {
     LOW=1,
     MEDIUM=1,
     HIGH=3
}


let t: [ string,number] = ["chai",10]
t.push("extra")
