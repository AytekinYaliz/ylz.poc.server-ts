"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storySchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    author: String,
    content: String,
    createdAt: Date
}, {
    collection: 'Stories',
    timestamps: true
});
exports.default = storySchema;
//# sourceMappingURL=Story.js.map