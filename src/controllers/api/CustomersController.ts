import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";

import Config, {ConfigKeysEnum} from '../../lib/Config';
import IController from '../IController';
import {IGetCustomersOutput, IPostCustomerInput} from '../../models/Customer';


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
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get.bind(this));
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post.bind(this));
    }

    getAll(req: Request, res: Response, next: NextFunction): void {        
        res.json({});
    }
    
    get(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }

    post(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }
}
