"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    createdAt: Date
}, {
    timestamps: true
});
// userSchema.pre("save", (next) => {
//     if (!this.createdAt) {
//         this.createdAt = new Date();
//     }
//     next();
// });
// export userSchema; 
//# sourceMappingURL=User.js.map