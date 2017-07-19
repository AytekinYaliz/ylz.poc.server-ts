"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("../../models/City");
const delay_1 = require("./delay");
const Utilities_1 = require("../../lib/Utilities");
class CustomersController {
    constructor(router, baseUrl) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/cities';
    }
    setRoutes() {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get.bind(this));
    }
    getAll(req, res, next) {
        setTimeout(() => {
            res.json(City_1.cities);
        }, delay_1.default);
    }
    get(req, res, next) {
        setTimeout(() => {
            const city = City_1.cities.find(x => x.id === Number(req.params.id));
            if (Utilities_1.default.isNullOrUndefined(city)) {
                res.sendStatus(404);
            }
            res.json(city);
        }, delay_1.default);
    }
}
exports.default = CustomersController;
//# sourceMappingURL=CitiesController.js.map