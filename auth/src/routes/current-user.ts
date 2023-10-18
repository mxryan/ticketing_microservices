import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (_,res) => {
    res.send("THERE IS HAY")
});

export { router as currentUserRouter};
