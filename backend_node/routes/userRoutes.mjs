import express from 'express';
import User from '../models/userModel.mjs';

const router = express.Router();

router.post('/storeemail', async function(req, res) {
    const {email} = req.body.email;
    const user = new User({
        email: email
    });
    try {
        await user.save();
        res.send(user);
    }
    catch(error) {
        res.status(401).send("error at email registration");
    }
});

router.get('/getverification', async function(req, res) {
    const email = req.body.email;

    console.log("sunt in getverification");
})
export default router;