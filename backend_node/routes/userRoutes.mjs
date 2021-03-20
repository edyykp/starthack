import express from 'express';

const router = express.Router();

router.get('/', async function (req, res) {
    // data the conserves our API quota for development
    console.log("working in userRoutes");
});

router.post('/api/users/storeemail', async function(req, res) {
    const email = req.body.email;

    console.log(email);
});

router.get('/api/users/getverification', async function(req, res) {
    const email = req.body.email;

    console.log("sunt in getverification");
})
export default router;