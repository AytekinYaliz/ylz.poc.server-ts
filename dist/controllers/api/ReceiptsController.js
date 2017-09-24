"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {IGetCustomersOutput, IGetCustomerOutput, IPostCustomerInput} from '../../models/Customer';
const Story_1 = require("../../models/Story");
class CustomersController {
    // private _repository: IRepository;
    constructor(router, baseUrl) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/receipts';
        // this._repository = new ReceiptsRepository();
    }
    setRoutes() {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll);
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.getOne);
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post);
        this.router.put(`${this.baseUrl}${this.endPointUrl}`, this.put);
        this.router.delete(`${this.baseUrl}${this.endPointUrl}`, this.delete);
    }
    getAll(req, res, next) {
        // const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl));
        // const storyModel = conn.model('Stories', storySchema);
        // const storyModel = mongoose.model('Stories', storySchema);
        Story_1.default
            .find({})
            .sort({ 'createdAt': -1 })
            .exec()
            .then(stories => {
            res.json(stories);
        })
            .catch(error => {
            res.status(500).json(error);
        });
    }
    getOne(req, res, next) {
        // const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true});
        // const storyModel = conn.model('Stories', storySchema);
        // storyModel.find({}).exec((err, stories) => res.json(stories));
        // MongoClient.connect(Config.getConfig(ConfigKeysEnum.mongoUrl))
        //     .then(db => {
        //         const collection = db.collection('Stories');
        //         collection.find({}).toArray()
        //             .then(docs => {
        //                 res.json(docs);
        //             })
        //             .catch(error => {
        //                 res.status(500).json(error);
        //             });
        //     })
        //     .catch(error => {
        //         res.status(500).json(error);
        //     });
        // try {
        //      var heroBusiness = new HeroBusiness();
        //         heroBusiness.retrieve((error, result) => {
        //             if(error) res.send({"error": "error"});
        //             else res.send(result);
        //         });
        //     }
        //     catch (e)  {
        //         console.log(e);
        //         res.send({"error": "error in your request"});
        //     }
        // // (<any>mongoose).Promise = global.Promise;
        // mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true})
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
        // const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl));
        // const storyModel = conn.model('Stories', storySchema);
        // const storyModel = mongoose.model('Stories', storySchema);
        const story = new Story_1.default(req.body);
        story.save()
            .then(data => {
            res.json(data);
        })
            .catch(error => {
            res.status(500).json(error);
        });
    }
    put(req, res, next) {
        res.status(404).json('Not implemented...');
    }
    delete(req, res, next) {
        res.status(404).json('Not implemented...');
    }
}
exports.default = CustomersController;
//# sourceMappingURL=ReceiptsController.js.map