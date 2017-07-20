import * as mongoose from 'mongoose';
import { model, Schema, Types } from 'mongoose';

// (<any>mongoose).Promise = global.Promise;

export default new Schema({
    id: Types.ObjectId,
    author: String,
    content: String,
    created_at: Date
}, {
    // options
});

// const storySchema = new Schema({
//     id: Types.ObjectId,
//     author: String,
//     content: String,
//     created_at: Date
// });
// export const List = model<any>('storyShema', storySchema);
