import { Schema } from 'mongoose';

 const storySchema = new Schema({
    id: Schema.Types.ObjectId,
    author: String,
    content: String,
    createdAt: Date
}, {
    collection: 'Stories',
    timestamps: true
});

export default storySchema;
