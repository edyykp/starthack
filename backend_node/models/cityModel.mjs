import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    cityName: {type: String, required: true, unique: true},
    mayorName: {type: String, required: true, unique: true},
    userNumber: {type: int, required: true, unique: true},
    projectsNumber: {type: int, required: true, unique: true},
    projects: {type: Array, required: true, unique: true},
    benchmark: {type: int, required: true, unique: true},
}, {
    timestamps: true
  });

const cityModel = mongoose.model("City", citySchema);

export default cityModel;