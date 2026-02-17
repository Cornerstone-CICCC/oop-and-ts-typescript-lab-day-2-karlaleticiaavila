"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        const exists = this.products.some(p => p.id === product.id);
        if (exists)
            return `Product with ID ${product.id} already exists.`;
        this.products.push(product);
        return `Product ${product.name} added successfully!`;
    }
    updateProduct(id, update) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1)
            return `Product with ID ${id} not found.`;
        this.products[index] = Object.assign(Object.assign({}, this.products[index]), update);
        return `Product ${id} updated successfully!`;
    }
    getProduct(id) {
        return this.products.find(p => p.id === id);
    }
    getAllProducts() {
        return this.products;
    }
    removeProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1)
            return `Product with ID ${id} not found.`;
        const removed = this.products[index];
        this.products.splice(index, 1);
        return `Product ${removed.name} removed successfully!`;
    }
}
// Test
const inventory = new InventoryManager();
console.log(inventory.addProduct({ id: 1, name: "Laptop", price: 1000, stock: 5 }));
console.log(inventory.addProduct({ id: 2, name: "Mouse", price: 20, stock: 50 }));
console.log(inventory.updateProduct(1, { price: 900 }));
console.log(inventory.getProduct(1));
console.log(inventory.getAllProducts());
console.log(inventory.removeProduct(1));
console.log(inventory.getProduct(1));
