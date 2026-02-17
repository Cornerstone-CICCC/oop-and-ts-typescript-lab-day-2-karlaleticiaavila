

// 🔄 Multi-Type Storage System
// 📦 Create a system that can store and manage different types of data.
//
// 1. Implement a class `Storage<T, U>` that can store multiple types of data.
// 2. Implement a method `addItem` that stores a new item of a generic type.
// 3. Implement a method `removeItem` that removes an item by value.
// 4. Implement a method `getItems` that returns all stored items.
// 5. Implement a method `findItem` that searches for an item by a given property value.
// 6. Implement a method `updateItem` that updates an item by its property value.
type AnyObject = Record<string, unknown>;

class MyStorage<T, U> {
  items: Array<T | U> = [];

  addItem(item: T | U): string {
    this.items.push(item);
    return `${String(item)} added to storage.`;
  }

  getItems(): Array<T | U> {
    return this.items;
  }

removeItemBy(prop: string, val: unknown): string {
  const index = this.items.findIndex((item) =>
    typeof item === "object" && item !== null && (item as AnyObject)[prop] === val
  );
  if (index === -1) return `Item with ${prop} = ${String(val)} not found.`;
  this.items.splice(index, 1);
  return `Item removed successfully.`;
}

  findItem(prop: string, val: unknown): AnyObject | undefined {
    return this.items.find((item) => {
      return typeof item === "object" && item !== null && (item as AnyObject)[prop] === val;
    }) as AnyObject | undefined;
  }

  updateItem(prop: string, val: unknown, update: AnyObject): string {
    const index = this.items.findIndex((item) => {
      return typeof item === "object" && item !== null && (item as AnyObject)[prop] === val;
    });

    if (index === -1) return `Item with ${prop} = ${String(val)} not found.`;

    const current = this.items[index];
    if (typeof current !== "object" || current === null) {
      return `Found item is not an object; cannot update.`;
    }

    this.items[index] = { ...(current as AnyObject), ...update } as T | U;
    return `Item updated successfully.`;
  }
}

// Test
const numberStrStorage = new MyStorage<number, string>();

console.log(numberStrStorage.addItem(10));
console.log(numberStrStorage.addItem(20));
console.log(numberStrStorage.getItems());
console.log(numberStrStorage.removeItemBy("value", 10));
console.log(numberStrStorage.getItems());

const userStorage = new MyStorage<{ id: number; name: string }, string>();

console.log(userStorage.addItem({ id: 1, name: "Alice" }));
console.log(userStorage.addItem({ id: 2, name: "Bob" }));
console.log(userStorage.getItems());

console.log(userStorage.findItem("name", "Alice"));
console.log(userStorage.updateItem("id", 1, { name: "Alice Updated" }));
console.log(userStorage.getItems());



export{};