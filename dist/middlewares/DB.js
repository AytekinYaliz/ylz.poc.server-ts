"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// const StorySchema = require('../models/Story');
exports.connectDisconnect = (req, res, next) => {
    // Create connection using Mongo Lab URL
    //const connection = mongoose.createConnection('mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy');
    //mongoose.connection.close();
    const connection = mongoose.connect('mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy') //, { useMongoClient: true })
        .then(() => {
        console.log('inside mongoo');
        next();
    })
        .catch((error) => {
        console.error(error);
        next();
    });
    // Create a mongoose model using the Schema
    //req['storyModel'] = connection.model('Story', StorySchema);
    // req.on('end', () => {
    //     // Disconnect when request processing is completed
    //     mongoose.connection.close();
    // });
    // Call next to move to the next Express middleware
    //next();
};
// export default connectDisconnect;
//# sourceMappingURL=DB.js.map