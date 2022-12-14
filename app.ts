// Section1. TypeScript Hello World
let message: string = "Hello, TypeScript!";

let heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

// Section1. Why TypeScript
interface Product {
  id: number;
  name: string;
  price: number;
}

const getProduct = (id: number): Product => {
  return {
    id: id,
    name: `Product ${id}`,
    price: 42,
  };
};

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}`);
};

const product = getProduct(1);
showProduct(product.name, product.price); // The product Product 1 costs 42

// Section2: Type annotation

let greeting: (name: string) => string;
greeting = function (name: string) {
  return `Hi ${name}`;
};
console.log(greeting("joonhan")); // Hi joonhan

// Section2: Type inference
document.addEventListener("click", function (event) {
  console.log(event.button);
});

// Section2: Array type
let skills: string[];
skills = ["Problem Solving", "Collaborative"];
skills.forEach((skill) => {
  console.log(skill.length);
});

// 명시한 자료형 중 하나라면 OK
let scores: (string | number)[];
scores = ["Programming", "Collaborative", 4];
scores.forEach((element) => {
  console.log(element);
});

// Section2: Tuple type
// ? operator means it's optional argument.
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

let allIsOptional: [number?, number?, number?, number?];
allIsOptional = [];
