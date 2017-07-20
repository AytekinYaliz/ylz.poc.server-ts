//import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";

import * as mongoose from 'mongoose';
import Config, {ConfigKeysEnum} from '../../lib/Config';
import IController from '../IController';
import {IGetCustomersOutput, IGetCustomerOutput, IPostCustomerInput} from '../../models/Customer';


export default class CustomersController implements IController {
    public router: Router;
    public baseUrl: string;
    public endPointUrl: string;

    constructor(router: Router, baseUrl: string) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/receipts';
    }

    setRoutes(): void {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get.bind(this));
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post.bind(this));
    }

    getAll(req: Request, res: Response, next: NextFunction): void {
        // res.json({aa: 123});

        // mongoose.connection.close();
        mongoose.createConnection(Config.instance.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true})
            .then(() => {
                res.json({ id: 'ok' });
            })
            .catch((error: any) => {
                console.error(error);
                res.status(500).json(error);
            });
    }

    get(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }

    post(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }
}
