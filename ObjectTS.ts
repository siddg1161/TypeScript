//object
const chai = {
    name:"Masala Chai",
    price:20,
    isHot:true
}

/* 
{
 name:string;
 price:number;
 isHot:boolean
}
*/

let tea : {
    name:string;
    price:number;
    isHot:boolean
}
tea={
    name:"Ginger tea",
    price:50,
    isHot:true
}



type Tea= {
    name:string;
    price:number;
    ingredients:string[]
}
const adrakChai : Tea = {
    name:"Adrak Chai",
    price:25,
    ingredients:["tea leave","sugar"]
}


type Cup = {size:string}
let smallCup:Cup = {size:"200ml"}
let bigCup = {size:"500ml", material:"small"}
smallCup=bigCup //no prblm even if there is material extra


type Chai = {
    name:string;
    price:number;
    isHot:boolean
}
const updatedChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates)
}
updatedChai({price:25})
updatedChai({isHot:false})


type ChaiOrder=  {
    name?:string;
    quantity?:number
}
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}
placeOrder({
    name:"masalaChai",
    quantity:2
})


type Chaiii = {
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[]
}
type basicChaiInfo = Pick<Chaiii, "name" | "price">;
const chaiInfo:basicChaiInfo={
    name:"meri chai",
    price:50
}



type ChaiiiNew = {
    name:string;
    price:number;
    isHot:boolean;
    Secretingredients:string
}
type PublicChai = Omit<Chaiii,"Secretingredients">;
