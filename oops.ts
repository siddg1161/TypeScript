class Chai {
    flavour:string;
    price:number

    constructor(flavour:string, price:number){
        this.flavour=flavour,
        this.price=price
    }
}

//object
const masalaChai=new Chai("Ginger",20)
masalaChai.flavour="masala"




class Chaii{
    public flavor :string ="Masala"
    private secretIng:string="Cardamom" //can be accessed only within the class

    reveal()
    {
        return this.secretIng //ok
    }
}

class Shop  {
    protected shopName="CHai corner"
}
class Branch extends Shop {
    getName()
    {
        return this.shopName //ok
    }
}

const c= new Chaii()
c.reveal


class Wallet{
    #balance=100 //pvt

    getBalance(){
        return this.#balance
    }
}
const w=new Wallet()
w.getBalance


class Cup{
    readonly capacity:number = 20

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar=2

    get sugar() //getter
    {
        return this._sugar 
    }
    set sugar(value:number) //setter
    {
        if(value>5) throw new Error("Too Sweet")
        this._sugar=value
    }
}
const co=new ModernChai()
co.sugar=3


//static
class EkChai{
    static shopName = "ChaiCode Caffe"
    constructor(public flavour:string){

    }
}
console.log(EkChai.shopName) //static member will be acccessed thorugh class name not method



abstract class Drink {
    abstract make():void
}
class myChai extends Drink {
    make()
    {
        console.log("Brewing Chai")
    }
}


//composition (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 samew as inheritance)
class Heater{
    heat(){

    }
}
class ChaiMaker{
    constructor(private heater:Heater){

    }
    make(){
        this.heater.heat
    }
}
