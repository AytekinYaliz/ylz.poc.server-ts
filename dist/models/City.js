"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class City {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}
exports.default = City;
// our example model is just an Array
exports.cities = [
    new City(1, 'Bath'),
    new City(2, 'Birmingham'),
    new City(3, 'Bristol'),
    new City(4, 'London'),
    new City(5, 'Manchester'),
    new City(6, 'Oxford')
];
//# sourceMappingURL=City.js.map