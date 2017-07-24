import {Router, Request, Response, NextFunction} from "express";

import {cities} from '../../models/City';
import delay from './delay';
import IController from '../interfaces/IController';
import IReadController from '../interfaces/IReadController';
import Utilities from '../../lib/Utilities';


export default class CustomersController implements IController, IReadController {
    public router: Router;
    public baseUrl: string;
    public endPointUrl: string;

    constructor(router: Router, baseUrl: string) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/cities';
    }

    setRoutes(): void {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll);
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.getOne);
    }

    getAll(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            res.json(cities);
        }, delay);
    }

    getOne(req: Request, res: Response, next: NextFunction): void {
        setTimeout(() => {
            const city = cities.find(x => x.id === Number(req.params.id));

            if (Utilities.isNullOrUndefined(city)) {
                res.sendStatus(404);
            }

            res.json(city);
        }, delay);
    }
}
