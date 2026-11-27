interface Employee {
    id: number,
    name: string,
    department:string
}

 const employee: Employee ={id:250,name: "Arun", department: "HR" };
 
console.log(employee.id)

interface Product {
  name: string;
  price: number;
  quantity: number;
  readonly total_value: number;
}

function formatProduct(product: Product): string {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return `${product.name} - ${price}`;
}

const product: Product = {
  name: "Wireless Mouse",
  price: 250,
  quantity: 25,
  get total_value() {
    return this.price * this.quantity;
  },
};

console.log(formatProduct(product.total_value)); // "Wireless Mouse - $250.00"