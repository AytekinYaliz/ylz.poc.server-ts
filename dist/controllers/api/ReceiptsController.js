"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const Config_1 = require("../../lib/Config");
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
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.create);
        this.router.put(`${this.baseUrl}${this.endPointUrl}`, this.update);
        this.router.delete(`${this.baseUrl}${this.endPointUrl}`, this.delete);
    }
    // getAll(req: Request, res: Response, next: NextFunction): void {
    //     res.json({aa: 123});
    // }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield res.json([{ aa: 123 }]);
        });
    }
    getOne(req, res, next) {
        // const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl), {useMongoClient: true});
        // const storyModel = conn.model('Stories', storySchema);
        // storyModel.find({}).exec((err, stories) => res.json(stories));
        mongodb_1.MongoClient.connect(Config_1.default.getConfig(Config_1.ConfigKeysEnum.mongoUrl))
            .then(db => {
            let collection = db.collection('Stories');
            collection.find({}).toArray()
                .then(docs => {
                res.json(docs);
            })
                .catch(error => {
                res.status(500).json(error);
            });
        })
            .catch(error => {
            res.status(500).json(error);
        });
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
    create(req, res, next) {
        res.status(404).json('Not implemented...');
    }
    update(req, res, next) {
        res.status(404).json('Not implemented...');
    }
    delete(req, res, next) {
        res.status(404).json('Not implemented...');
    }
}
exports.default = CustomersController;
//# sourceMappingURL=ReceiptsController.js.map