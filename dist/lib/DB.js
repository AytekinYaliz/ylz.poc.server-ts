// import {MongoClient} from 'mongodb';
// import Config, {ConfigKeysEnum} from './Config';
// class DBConnection {
//     private _url = Config.getConfig(ConfigKeysEnum.mongoUrl);
//     private _collectionName: string = null;
//     constructor(collectionName: string) {
//         this._collectionName = db.collection('documents');
//     }
//     findAll(): Promise<any[]> {
//         MongoClient.connect(this._url, (err, db) => {
//             let collection = db.collection(this._collectionName);
//             // Find some documents
//             collection.find({}).toArray((err, docs) => {
//                 db.close();
//                 return ;
//             });
//         });
//     }
// } 
//# sourceMappingURL=DB.js.map