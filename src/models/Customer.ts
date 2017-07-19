export default class Customer {
    public id: number;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public city?: number;

    constructor(id = 0, firstName = '', middleName = '', lastName = '', city?: number) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.city = city;
    }
}

export interface IGetCustomersOutput {
    dbId: number;
    id?: number;
    text: string;
}

export interface IGetCustomerOutput {
    dbId: number;
    id?: number;
    text: string;
}

export interface IPostCustomerInput {
    dbId: number;
    id?: number;
    text: string;
}

// our example model is just an Array
export const customers: Customer[] = [
    new Customer(1, 'Hakan', '', 'Ugur', 2),
    new Customer(2, 'Aytekin', '', 'Yaliz', 3),
    new Customer(3, 'Izzet', '', 'Ertas', 1),
    new Customer(4, 'Abdurrahman', '', 'Sanver', 2),
    new Customer(5, 'Cihat', '', 'Ekinci', 3)
];