export default class Customer {
    private name: string;
    
    constructor() {
        
    }
}

export interface IGetCustomersOutput {
    dbId: number;
    id?: number;
    text: string;
}
