import express from 'express';

const router = express.Router();

router.post('/api/users/signin ', (_,res) => {
    res.send("THERE IS HAY")
});

export { router as signinRouter};
