class EbayInventory {
    getItem() {
        return 'ebay';
    }
    getItems(type) {
        return ['ebay'];
    }
    addItem(item) {
    }
}
class AmazonInventory {
    getItem() {
        return 'amazon';
    }
    getItems(type) {
        return ['amazon'];
    }
    addItem(item) {
    }
}
let inventory;
let comicBooks = inventory.getItems('comic');
let inventory2;
let horrorBooks = inventory2.getItems('horror');
class Stack {
    constructor() {
        this._store = [];
    }
    push(val) {
        this._store.push(val);
    }
    pop() {
        return this._store.pop();
    }
}
class Queue {
    constructor() {
        this._store = [];
    }
    push(val) {
        this._store.push(val);
    }
    pop() {
        return this._store.shift();
    }
}
//# sourceMappingURL=_Generics.js.map