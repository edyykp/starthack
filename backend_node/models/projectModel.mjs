import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    cityName: {type: String, required: true, unique: true},
    description: {type: String, required: true, unique: true},
    category: {type: String, required: true, unique: true},
    jobsCreatedNumber: {type: int, required: true, unique: true},
    advantages: {type: String, required: true, unique: true},
    disadvantages: {type: String, required: true, unique: true},
}, {
    timestamps: true
  });

const projectModel = mongoose.model("Project", projectSchema);

export default projectModel;