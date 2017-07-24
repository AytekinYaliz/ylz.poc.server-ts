//import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";

import delay from './delay';
import Utilities from '../../lib/Utilities';
import IController from '../interfaces/IController';
import {customers} from '../../models/Customer';


export default class CustomersController implements IController {
    public router: Router;
    public baseUrl: string;
    public endPointUrl: string;

    constructor(router: Router, baseUrl: string) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/customers';
    }

    setRoutes(): void {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll);
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get);
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post);
    }

    getAll(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            res.json(customers);
        }, delay);
    }

    get(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            const customer = customers.find(x => x.id === Number(req.params.id));

            if (Utilities.isNullOrUndefined(customer)) {
                res.sendStatus(404);
            }

            res.json(customer);
        }, delay);
    }

    post(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }
}
