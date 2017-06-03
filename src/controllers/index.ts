import { Router, Request, Response, NextFunction } from 'express';
import IController from './IController';
import CustomersController from "./api/CustomersController";
const packageJson = require('../../package.json');

export class IndexRoute {
    private router: Router;
    private controllers: IController[];
    private apiBaseUrl = '/api';

    constructor(router: Router) {
        this.router = router;
        this.controllers = [
            new CustomersController(this.router, this.apiBaseUrl)
        ];
    }

    public createRoutes(): void {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.json({ version: packageJson.version });
        });

        this.controllers.forEach(controller => {
            controller.setRoutes();
        });
    }
}
