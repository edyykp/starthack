import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    cityName: {type: String},
    lastName: {type: String},
    firstName: {type: String},
    email: {type: String, required: true, unique: true},
    projectsVoted: {type: Array},
    isAdmin: {type: Boolean, default:0},
    confirmedEmail: {type: Boolean, default: false}
}, {
    timestamps: true
  });

const userModel = mongoose.model("User", userSchema);

export default userModel;