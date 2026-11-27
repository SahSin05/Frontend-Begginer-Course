const book={
    title: "harry potter",
    author: "J.K Rowling",
    pageCount: 158
}
console.log(book.title)

const price =250;
const quantatity=25;
const product ={
    price,
    quantatity,
    total_value: price*quantatity,
} 
console.log(product.total_value)