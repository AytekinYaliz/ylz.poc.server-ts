//import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";

import * as mongoose from 'mongoose';
import Config, {ConfigKeysEnum} from '../../lib/Config';
import IController from '../IController';
import {IGetCustomersOutput, IGetCustomerOutput, IPostCustomerInput} from '../../models/Customer';
import storySchema from '../../models/Story';


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
        res.json({aa: 123});
    }

    get(req: Request, res: Response, next: NextFunction): void {
        // res.json({});

        const conn = mongoose.createConnection(Config.instance.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true});
        const storyModel = conn.model('Stories', storySchema);
        storyModel.find({}).exec((err, stories) => res.json(stories));

        // // (<any>mongoose).Promise = global.Promise;
        // mongoose.createConnection(Config.instance.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true})
        //     .then((db: any) => {
        //         const storyModel = db.model('Story', storySchema);
        //         storyModel.find({}).exec((err: any, stories: any) => res.json(stories));
        //         mongoose.connection.close();
        //     })
        //     .catch((error: any) => {
        //         console.error(error);
        //         res.status(500).json(error);
        //     });
    }

    post(req: Request, res: Response, next: NextFunction): void {
        res.json({});
    }
}
