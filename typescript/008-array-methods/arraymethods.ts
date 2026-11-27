const names: string[]=["vikram","keshav","kash","aditya","rahul"];
const upperNames: string[] =names.map((name)=>name.toUpperCase());
console.log(upperNames);

const prices: number[]=[250,800,657,493,582,123]
const expensive: number[]=prices.filter((price)=>price > 500);
console.log(expensive)