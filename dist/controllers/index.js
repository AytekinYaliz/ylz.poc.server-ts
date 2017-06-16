"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CitiesController_1 = require("./api/CitiesController");
const CustomersController_1 = require("./api/CustomersController");
const packageJson = require('../../package.json');
class IndexRoute {
    constructor(router) {
        this.apiBaseUrl = '/api';
        this.router = router;
        this.controllers = [
            new CitiesController_1.default(this.router, this.apiBaseUrl),
            new CustomersController_1.default(this.router, this.apiBaseUrl)
        ];
    }
    createRoutes() {
        this.router.get('/', (req, res, next) => {
            res.json({
                version: packageJson.version
                //env: JSON.parse(process.env)
            });
        });
        this.controllers.forEach(controller => {
            controller.setRoutes();
        });
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map
