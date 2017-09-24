import * as mongoose from 'mongoose';

const tableName = 'Stories';

const storySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: String,
    content: String,
    createdAt: Date
}, {
    collection: tableName,
    timestamps: true
});

export default mongoose.model(tableName, storySchema);
