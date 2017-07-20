"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Config_1 = require("../../lib/Config");
const Story_1 = require("../../models/Story");
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
        res.json({ aa: 123 });
    }
    get(req, res, next) {
        // res.json({});
        const conn = mongoose.createConnection(Config_1.default.instance.getConfig(Config_1.ConfigKeysEnum.mongoUrl), { useMongoClient: true });
        const storyModel = conn.model('Stories', Story_1.default);
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
    post(req, res, next) {
        res.json({});
    }
}
exports.default = CustomersController;
//# sourceMappingURL=ReceiptsController.js.map