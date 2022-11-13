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
showProduct(product.name, product.price);
