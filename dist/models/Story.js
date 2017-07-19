"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
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
//# sourceMappingURL=Story.js.map