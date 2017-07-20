"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// (<any>mongoose).Promise = global.Promise;
exports.default = new mongoose_1.Schema({
    // id: Types.ObjectId,
    author: String,
    content: String
    // ,createdAt: Date
}, {});
// export default model<any>('Stories', storySchema);
// const storySchema = new Schema({
//     id: Types.ObjectId,
//     author: String,
//     content: String,
//     created_at: Date
// });
// export const List = model<any>('storyShema', storySchema);
//# sourceMappingURL=Story.js.map