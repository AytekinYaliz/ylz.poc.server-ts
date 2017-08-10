// import * as mongoose from 'mongoose';
// import { Request, Response, NextFunction } from 'express';
// import Config, {ConfigKeysEnum} from '../lib/Config';
// import { storySchema } from '../models/Story';
// module.exports = {
//     // Connect/Disconnect middleware
//     connectDisconnect: (req: Request, res: Response, next: NextFunction) => {
//         // Create connection using Mongo Lab URL
//         // available in Webtask context
//         const connection = mongoose.createConnection(Config.getConfig(ConfigKeysEnum.mongoUrl));
//         // Create a mongoose model using the Schema
//         req.storyModel = connection.model('Story', storySchema);
//         req.on('end', () => {
//             // Disconnect when request
//             // processing is completed
//             mongoose.connection.close();
//         });
//         // Call next to move to
//         // the next Express middleware
//         next();
//     }
// }; 
//# sourceMappingURL=db.js.map