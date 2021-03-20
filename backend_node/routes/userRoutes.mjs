import express from 'express';

const router = express.Router();

router.get('/', async function (req, res) {
    // data the conserves our API quota for development
    console.log("working in userRoutes");
})

export default router;