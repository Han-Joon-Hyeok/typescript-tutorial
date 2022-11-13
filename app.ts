// Section1. TypeScript Hello World
let message: string = "Hello, TypeScript!";

let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

// Section1. Why TypeScript
interface Product {
	id: Number,
	name: String,
	price: Number
}

const getProduct = (id: Number): Product => {
	return {
		id: id,
		name: `Product ${id}`,
		price: 42
	}
} 

const showProduct = (name: String, price: Number) => {
	console.log(`The product ${name} costs ${price}`);
};

const product = getProduct(1);
showProduct(product.name, product.price); // The product Product 1 costs 42