import express from 'express';

const router = express.Router();

router.post('/storeemail', async function(req, res) {
    const email = req.body.email;

    console.log(email);
});

router.get('/getverification', async function(req, res) {
    const email = req.body.email;

    console.log("sunt in getverification");
})
export default router;