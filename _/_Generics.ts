interface IInventory<T> {
    getItem: () => T;
    getItems: (type: string) => Array<T>;
    addItem: (item: T) => void;
}

interface IInventory2<T> {
    getItem(): T;
    getItems(type: string): Array<T>;
    addItem(item: T): void;
}

class EbayInventory implements IInventory<string> {
    getItem(): string {
        return 'ebay';
    }
    getItems(type: string): string[] {
        return ['ebay'];
    }
    addItem(item: string): void {
    }
}

class AmazonInventory implements IInventory2<string> {
    getItem(): string {
        return 'amazon';
    }
    getItems(type: string): string[] {
        return ['amazon'];
    }
    addItem(item: string): void {
    }
}

let inventory: IInventory<string>;
let comicBooks: Array<string> = inventory.getItems('comic');

let inventory2: IInventory2<string>;
let horrorBooks: Array<string> = inventory2.getItems('horror');


class Stack<T> {
    _store: T[] = [];
    push(val: T) {
        this._store.push(val);
    }
    pop(): T | undefined {
        return this._store.pop();
    }
}
class Queue<T> {
    _store: T[] = [];
    push(val: T) {
        this._store.push(val);
    }
    pop(): T | undefined {
        return this._store.shift();
    }
}
