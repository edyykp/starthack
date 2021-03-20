import express from 'express';
import config from './config.mjs';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

const app = express();
app.use("/api/", apiLimiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.disable('x-powered-by');

app.use("/api/users", userRoutes);
app.listen(config.PORT, () => {console.log("Server started at http://localhost:"+config.PORT)});