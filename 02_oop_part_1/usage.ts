// Create the inventory
import {Inventory} from "./code/src/Inventory";
import {Item} from "./code/src/Item";
import {Sword} from "./code/src/Sword";
import {ItemWeightComparator} from "./code/src/ItemWeightComparator";
import {Pizza} from "./code/src/Pizza";

const inventory: Inventory = new Inventory();

// Create a set of items
const a: Sword = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Sword = new Sword(40, 0.7893, 200, 2);
const c: Sword = new Sword(40, 1, 100, 3);
const pizza: Item = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

// Display the inventory
console.log(inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log(inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log(inventory.toString());

// Use the sword
console.log(a.use());
console.log(a.use());
