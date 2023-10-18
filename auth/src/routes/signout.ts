import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (_,res) => {
    res.send("THERE IS HAY")
});

export { router as signoutRouter};
