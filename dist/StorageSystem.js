"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyStorage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        return `${String(item)} added to storage.`;
    }
    getItems() {
        return this.items;
    }
    removeItemBy(prop, val) {
        const index = this.items.findIndex((item) => typeof item === "object" && item !== null && item[prop] === val);
        if (index === -1)
            return `Item with ${prop} = ${String(val)} not found.`;
        this.items.splice(index, 1);
        return `Item removed successfully.`;
    }
    findItem(prop, val) {
        return this.items.find((item) => {
            return typeof item === "object" && item !== null && item[prop] === val;
        });
    }
    updateItem(prop, val, update) {
        const index = this.items.findIndex((item) => {
            return typeof item === "object" && item !== null && item[prop] === val;
        });
        if (index === -1)
            return `Item with ${prop} = ${String(val)} not found.`;
        const current = this.items[index];
        if (typeof current !== "object" || current === null) {
            return `Found item is not an object; cannot update.`;
        }
        this.items[index] = Object.assign(Object.assign({}, current), update);
        return `Item updated successfully.`;
    }
}
// Test
const numberStrStorage = new MyStorage();
console.log(numberStrStorage.addItem(10));
console.log(numberStrStorage.addItem(20));
console.log(numberStrStorage.getItems());
console.log(numberStrStorage.removeItemBy("value", 10));
console.log(numberStrStorage.getItems());
const userStorage = new MyStorage();
console.log(userStorage.addItem({ id: 1, name: "Alice" }));
console.log(userStorage.addItem({ id: 2, name: "Bob" }));
console.log(userStorage.getItems());
console.log(userStorage.findItem("name", "Alice"));
console.log(userStorage.updateItem("id", 1, { name: "Alice Updated" }));
console.log(userStorage.getItems());
