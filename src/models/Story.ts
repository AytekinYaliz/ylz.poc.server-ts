import * as mongoose from 'mongoose';

 const storySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: String,
    content: String,
    createdAt: Date
}, {
    collection: 'Stories',
    timestamps: true
});

// export default storySchema;

// // export const User: UserType = mongoose.model<UserType>('User', userSchema);
// const User = mongoose.model("User", userSchema);
// export default User;

export default mongoose.model('Stories', storySchema);
