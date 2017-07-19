"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Story_1 = require("../models/Story");
// const StorySchema = require('../models/Story');
exports.connectDisconnect = (req, res, next) => {
    // Create connection using Mongo Lab URL
    const connection = mongoose.createConnection('mongodb://<dbuser>:<dbpassword>@ds161022.mlab.com:61022/lh_accountancy');
    // Create a mongoose model using the Schema
    req['storyModel'] = connection.model('Story', Story_1.default);
    req.on('end', () => {
        // Disconnect when request processing is completed
        mongoose.connection.close();
    });
    // Call next to move to the next Express middleware
    next();
};
// export default connectDisconnect;
//# sourceMappingURL=DB.js.map