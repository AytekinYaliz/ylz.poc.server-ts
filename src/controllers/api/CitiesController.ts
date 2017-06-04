import {Router, Request, Response, NextFunction} from "express";
import {cities} from '../../models/City';
import delay from './delay';

import Config, {ConfigKeysEnum} from '../../lib/Config';
import IController from '../IController';
//import {IGetCustomersOutput, IGetCustomerOutput, IPostCustomerInput} from '../../models/City';


export default class CustomersController implements IController {
    public router: Router;
    public baseUrl: string;
    public endPointUrl: string;

    constructor(router: Router, baseUrl: string) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/cities';
    }

    setRoutes(): void {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
    }

    getAll(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            res.json(cities);
        }, delay);
    }
}
