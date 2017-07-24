import { Router, Request, Response, NextFunction } from 'express';
import IController from './interfaces/IController';
import CitiesController from "./api/CitiesController";
import CustomersController from "./api/CustomersController";
import ReceiptsController from "./api/ReceiptsController";
const packageJson = require('../../package.json');

export class IndexRoute {
    private router: Router;
    private controllers: IController[];
    private readonly apiBaseUrl = '/api';

    constructor(router: Router) {
        this.router = router;
        this.controllers = [
            new CitiesController(this.router, this.apiBaseUrl),
            new CustomersController(this.router, this.apiBaseUrl),
            new ReceiptsController(this.router, this.apiBaseUrl)
        ];
    }

    public createRoutes(): void {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.json({
                version: packageJson.version,
                NODE_ENV: process.env.NODE_ENV,
                env: process.env
            });
        });

        this.router.get('/api', (req: Request, res: Response, next: NextFunction) => {
            res.json({
                version: packageJson.version,
                NODE_ENV: process.env.NODE_ENV,
                env: 'for more details go to /'
            });
        });

        this.controllers.forEach(controller => {
            controller.setRoutes();
        });
    }
}
