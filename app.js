// Section1. TypeScript Hello World
var message = "Hello, TypeScript!";
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
var getProduct = function (id) {
    return {
        id: id,
        name: "Product ".concat(id),
        price: 42
    };
};
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price));
};
var product = getProduct(1);
showProduct(product.name, product.price); // The product Product 1 costs 42
// Section2: Type annotation
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting("joonhan")); // Hi joonhan
// Section2: Type inference
document.addEventListener('click', function (event) {
    console.log(event.button);
});
// Section2: Array type
var skills;
skills = ['Problem Solving', 'Collaborative'];
skills.forEach(function (skill) {
    console.log(skill.length);
});
var scores;
scores = ['Programming', 5, 'Collaborative', 4];
scores.forEach(function (element) {
    console.log(element);
});
