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
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll);
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.getOne);
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post);
        this.router.put(`${this.baseUrl}${this.endPointUrl}`, this.put);
        this.router.delete(`${this.baseUrl}${this.endPointUrl}`, this.delete);
    }
    getAll(req, res, next) {
        setTimeout(() => {
            res.json(Customer_1.customers);
        }, delay_1.default);
    }
    getOne(req, res, next) {
        setTimeout(() => {
            const customer = Customer_1.customers.find(x => x.id === Number(req.params.id));
            if (Utilities_1.default.isNullOrUndefined(customer)) {
                res.sendStatus(404);
            }
            res.json(customer);
        }, delay_1.default);
    }
    post(req, res, next) {
        res.json({});
    }
    put(req, res, next) {
        res.status(404).json('Not implemented...');
    }
    delete(req, res, next) {
        res.status(404).json('Not implemented...');
    }
}
exports.default = CustomersController;
//# sourceMappingURL=CustomersController.js.map