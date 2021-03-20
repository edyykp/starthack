import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    isAdmin: {type: Boolean, required: true, default:0},
    confirmedEmail: {type: Boolean, default: false}
}, {
    timestamps: true
  });

const userModel = mongoose.model("User", userSchema);

export default userModel;