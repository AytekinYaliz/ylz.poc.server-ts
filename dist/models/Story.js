"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
exports.default = mongoose.model(tableName, storySchema);
//# sourceMappingURL=Story.js.map