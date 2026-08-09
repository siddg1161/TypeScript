interface TeaRecipe {
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe {
    water=100;
    milk=50
}



type BaseChai = {tealeaves:number}
type Extra={masala:number}

type GudChai = BaseChai & Extra
const cup:GudChai = {
    tealeaves:2,
    masala:1
}


type Config = {
    readonly appName:string;
    version:number
}
const cfg : Config = {
    appName:"Master",
    version:1
}

cfg.appName = "Chai" //erropr due to readonl;y
