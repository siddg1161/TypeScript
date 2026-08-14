function wrapInArray<T>(item:T):T[] {
    return [item]
}
wrapInArray("msala")
wrapInArray(42)
wrapInArray({flavor:"chai"})


function pair<A,B>(a:A, b:B):[A,B] {
    return [a,b]
}
pair("main",23)
pair(23,{flavour:"lol"})


//generic interface
interface Box<T> {
  content:T
}
const numberBox: Box<number> = {content:23}
const numberBoCup: Box<string> = {content:"maala"}


interface ApiPromise<T>{
    status:number,
    data:T
}
const res: ApiPromise<{flavor:string}> = {
    status:200,
    data:{flavor:"maasala"}
}
