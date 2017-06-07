"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay_1 = require("./delay");
const Utilities_1 = require("../../lib/Utilities");
const Customer_1 = require("../../models/Customer");
class CustomersController {
    constructor(router, baseUrl) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/customers';
    }
    setRoutes() {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get.bind(this));
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post.bind(this));
    }
    getAll(req, res, next) {
        setTimeout(() => {
            res.json(Customer_1.customers);
        }, delay_1.default);
    }
    get(req, res, next) {
        setTimeout(() => {
            let customer = Customer_1.customers.find(x => x.id === Number(req.params.id));
            if (Utilities_1.default.isNullOrUndefined(customer)) {
                res.sendStatus(404);
            }
            res.json(customer);
        }, delay_1.default);
    }
    post(req, res, next) {
        res.json({});
    }
}
exports.default = CustomersController;
//# sourceMappingURL=CustomersController.js.map