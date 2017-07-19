"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: String,
    content: String,
    created_at: Date
});
//const mongoose = require('mongoose');
//
// module.exports = new mongoose.Schema({
//     author: String,
//     content: String,
//     created_at: Date,
//     id: mongoose.Schema.ObjectId
// }); 
//# sourceMappingURL=Story.js.map