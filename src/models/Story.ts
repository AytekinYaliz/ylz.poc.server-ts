// import * as mongoose from 'mongoose';
import { model, Schema, Types } from 'mongoose';

export default new Schema({
    id: Types.ObjectId,
    author: String,
    content: String,
    created_at: Date
});

// const storySchema = new Schema({
//     id: Types.ObjectId,
//     author: String,
//     content: String,
//     created_at: Date
// });
// export const List = model<any>('storyShema', storySchema);
