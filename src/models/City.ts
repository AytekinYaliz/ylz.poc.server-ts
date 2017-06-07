import ISelect from './ISelect';

export default class City implements ISelect {
    id: number;
    text: string;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }
}

// our example model is just an Array
export const cities: City[] = [
    new City(1, 'Bath'),
    new City(2, 'Birmingham'),
    new City(3, 'Bristol'),
    new City(4, 'London'),
    new City(5, 'Manchester'),
    new City(6, 'Oxford')
];