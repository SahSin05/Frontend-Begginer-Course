function Greet(name: string): string{
    return `Hello ${name}`;
}
console.log(Greet('Aditya'))

function calculateDiscount(price: number, discount:number):number{
    return price - (price*discount)/100

}
console.log(calculateDiscount(500, 20))