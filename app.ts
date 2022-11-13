// Section1. TypeScript Hello World
let message: string = "Hello, TypeScript!";

let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

// Section1. Why TypeScript
interface Product {
	id: number,
	name: string,
	price: number
}

const getProduct = (id: number): Product => {
	return {
		id: id,
		name: `Product ${id}`,
		price: 42
	}
} 

const showProduct = (name: string, price: number) => {
	console.log(`The product ${name} costs ${price}`);
};

const product = getProduct(1);
showProduct(product.name, product.price); // The product Product 1 costs 42