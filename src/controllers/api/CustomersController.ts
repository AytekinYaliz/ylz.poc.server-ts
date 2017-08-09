//import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";

import delay from './delay';
import Utilities from '../../lib/Utilities';
import IController from '../interfaces/IController';
import IReadController from '../interfaces/IReadController';
import IWriteController from '../interfaces/IWriteController';
import {customers} from '../../models/Customer';


export default class CustomersController implements IController, IReadController, IWriteController {
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
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.getOne);
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post);
        this.router.put(`${this.baseUrl}${this.endPointUrl}`, this.put);
        this.router.delete(`${this.baseUrl}${this.endPointUrl}`, this.delete);
    }

    getAll(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            res.json(customers);
        }, delay);
    }

    getOne(req: Request, res: Response, next: NextFunction): void {
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
    put(req: Request, res: Response, next: NextFunction): void {
        res.status(404).json('Not implemented...');
    }
    delete(req: Request, res: Response, next: NextFunction): void {
        res.status(404).json('Not implemented...');
    }
}
