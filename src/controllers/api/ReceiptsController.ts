//import HttpPromise from '../../lib/HttpPromise';
import {Router, Request, Response, NextFunction} from "express";
// import * as mongoose from 'mongoose';

// import Config, {ConfigKeysEnum} from '../../lib/Config';
import IController from '../interfaces/IController';
import IReadController from '../interfaces/IReadController';
import IWriteController from '../interfaces/IWriteController';
// import {IGetCustomersOutput, IGetCustomerOutput, IPostCustomerInput} from '../../models/Customer';
import  storyModel  from '../../models/Story';


export default class CustomersController implements IController, IReadController, IWriteController {
    public router: Router;
    public baseUrl: string;
    public endPointUrl: string;
    // private _repository: IRepository;

    constructor(router: Router, baseUrl: string) {
        this.router = router;
        this.baseUrl = baseUrl;
        this.endPointUrl = '/receipts';
        // this._repository = new ReceiptsRepository();
    }

    setRoutes(): void {
        this.router.get(`${this.baseUrl}${this.endPointUrl}`, this.getAll);
        this.router.get(`${this.baseUrl}${this.endPointUrl}/:id`, this.getOne);
        this.router.post(`${this.baseUrl}${this.endPointUrl}`, this.post);
        this.router.put(`${this.baseUrl}${this.endPointUrl}`, this.put);
        this.router.delete(`${this.baseUrl}${this.endPointUrl}`, this.delete);
    }

    // getAll(req: Request, res: Response, next: NextFunction): void {
    //     res.json({aa: 123});
    // }

    getAll(req: Request, res: Response, next: NextFunction): void {
        // const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl));
        // const storyModel = conn.model('Stories', storySchema);

        // const storyModel = mongoose.model('Stories', storySchema);

        storyModel
            .find({})
            .sort({'createdAt': -1})
            .exec()
            .then(stories => {
                // conn.close();
                res.json(stories);
            })
            .catch(error => {
                // conn.close();
                res.status(500).json(error);
            });
    }

    getOne(req: Request, res: Response, next: NextFunction): void {
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

    post(req: Request, res: Response, next: NextFunction): void {
        //const conn = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl));
        // const storyModel = conn.model('Stories', storySchema);

        // const storyModel = mongoose.model('Stories', storySchema);
        const story = new storyModel(req.body);

        story.save()
            .then(data => {
                //conn.close();
                res.json(data);
            })
            .catch(error => {
                //conn.close();
                res.status(500).json(error);
            });
    }
    put(req: Request, res: Response, next: NextFunction): void {
        res.status(404).json('Not implemented...');
    }
    delete(req: Request, res: Response, next: NextFunction): void {
        res.status(404).json('Not implemented...');
    }
}
