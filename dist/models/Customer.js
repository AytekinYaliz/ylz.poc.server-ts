"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id = 0, firstName = '', middleName = '', lastName = '', city) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.city = city;
    }
}
exports.default = Customer;
// our example model is just an Array
exports.customers = [
    new Customer(1, 'Hakan', '', 'Ugur', 2),
    new Customer(2, 'Aytekin', '', 'Yaliz', 3),
    new Customer(3, 'Izzet', '', 'Ertas', 1),
    new Customer(4, 'Abdurrahman', '', 'Sanver', 2),
    new Customer(5, 'Cihat', '', 'Ekinci', 3)
];
//# sourceMappingURL=Customer.js.map