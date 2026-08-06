let response:any = "42"
let numericLength:number= (response as string).length

type Book = {
    name:string
}
let bookString= '{"name":"who moved my chesse"}'
let bookObject= JSON.parse(bookString) as Book
console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement

let value:any 

value="chai"
value=[1,2,3]
value=2.5
value.toUpperCase();

let newValue:unknown
newValue="chai"
newValue=[1,2,3]
newValue=2.5
newValue.toUpperCase(); //error
if(typeof newValue==="string")
{
    newValue.toUpperCase();
}


try{

}
catch(error)
{
    if(error instanceof Error)
    {
        console.log(error.message)
    }
    console.log("error",error)
}

type Role = "admin" | "user"
function redirectBasedOnRole(role:Role)  :void{
    if(role==="admin")
    {
        console.log("Reidrceting toAdmin Dashboard")
        return
    }
    if(role==="user")
    {
        console.log("Reidrceting touser Dashboard")
        return
    }

    role; //error: *never* data type
}

function neverReturn(): never{
    while(true){}
}
