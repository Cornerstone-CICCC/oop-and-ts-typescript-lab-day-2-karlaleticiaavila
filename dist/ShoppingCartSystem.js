"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("SHOPPINGCART TS UPDATED ✅");
// 🛍️ E-Commerce Cart System
// 🛒 Create a shopping cart system that manages products and their quantities.
//
// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
// 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
// 3. Implement a method `removeFromCart` that removes a product from the cart completely.
// 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
// 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
// 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.
var Category;
(function (Category) {
    Category["Fruit"] = "Fruit";
    Category["Vegetable"] = "Vegetable";
    Category["Electronics"] = "Electronics";
    Category["Pastry"] = "Pastry";
    Category["Cereal"] = "Cereal";
})(Category || (Category = {}));
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        const existing = this.cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += product.quantity;
            return `Updated quantity of ${product.name}`;
        }
        this.cart.push(product);
        return `${product.name} added to cart`;
    }
    updateQuantity(id, qty) {
        const item = this.cart.find(i => i.id === id);
        if (!item)
            return `Product not found`;
        item.quantity = qty;
        return `Quantity updated`;
    }
    getTotalPrice() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    removeFromCart(id) {
        const index = this.cart.findIndex(i => i.id === id);
        if (index === -1)
            return `Product not found`;
        this.cart.splice(index, 1);
        return `Product removed`;
    }
}
const cart = new ShoppingCart();
console.log(cart.addToCart({ id: 1, name: "Headphones", price: 50, quantity: 1, category: Category.Electronics }));
console.log(cart.addToCart({ id: 2, name: "Keyboard", price: 100, quantity: 1, category: Category.Electronics }));
console.log(cart.updateQuantity(1, 3));
console.log(cart.getTotalPrice());
console.log(cart.removeFromCart(2));
