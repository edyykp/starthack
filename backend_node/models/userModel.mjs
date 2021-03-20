import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    cityName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},
    firstName: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, dropDups: true},
    projectsVoted: {type: Array, required: true, unique: true},
    isAdmin: {type: Boolean, required: true, default:0},
    confirmedEmail: {type: Boolean, default: false}
}, {
    timestamps: true
  });

const userModel = mongoose.model("User", userSchema);

export default userModel;