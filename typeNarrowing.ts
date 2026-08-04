function getChai(kind: string | number)
{
    if(typeof kind==='string')
    {
        return `making ${kind} chai`
    }
    return `sidd ${kind} chai`
}

function orderChai(size: 'small' | 'medium' | 'large' | 'number')
{
    if(size === "small")
    {
        return `small cutting chai`
    }
    if(size === "medium" || size=== "large")
    {
        return `big cutting chai`
    }

    return `chai order ${size}`
}

type ChaiOrder = {
    type: string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder)
{
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai: ${item}`
}
