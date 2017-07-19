import * as mongoose from 'mongoose';
import {Router, Request, Response, NextFunction} from "express";
import StorySchema from '../models/Story';

// const StorySchema = require('../models/Story');

export const connectDisconnect = (req: Request, res: Response, next: NextFunction) => {
    // Create connection using Mongo Lab URL
    const connection = mongoose.createConnection('mongodb://<dbuser>:<dbpassword>@ds161022.mlab.com:61022/lh_accountancy');

    // Create a mongoose model using the Schema
    req['storyModel'] = connection.model('Story', StorySchema);

    req.on('end', () => {
        // Disconnect when request processing is completed
        mongoose.connection.close();
    });

    // Call next to move to the next Express middleware
    next();
};

// export default connectDisconnect;
