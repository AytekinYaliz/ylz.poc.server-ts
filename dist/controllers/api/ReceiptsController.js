"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        res.json({ aa: 123 });
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