"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Config_1 = require("../../lib/Config");
class CustomersController {
    constructor(router, baseUrl) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/receipts';
    }
    setRoutes() {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll.bind(this));
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.get.bind(this));
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post.bind(this));
    }
    getAll(req, res, next) {
        // res.json({aa: 123});
        // mongoose.connection.close();
        mongoose.createConnection(Config_1.default.instance.getConfig(Config_1.ConfigKeysEnum.mongoUrl), { useMongoClient: true })
            .then(() => {
            res.json({ id: 'ok' });
        })
            .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
    }
    get(req, res, next) {
        res.json({});
    }
    post(req, res, next) {
        res.json({});
    }
}
exports.default = CustomersController;
//# sourceMappingURL=ReceiptsController.js.map