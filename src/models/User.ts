import { Schema, Types } from "mongoose";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
}

export const userSchema = new Schema({
    id: Types.ObjectId,
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