import { Router } from "express";
import Record from "./models/Record";
import User from "./models/User";
import { recordRepository, userRepository } from "./repository";


const router = Router();

router.get('/data', async (req, res) => {

    const records = await recordRepository.getRecords({});
    res.json(records);
});
router.post('/data', async (req, res) => {
    const body = req.body;

    const record = new Record({
        date: new Date(body.date),
        pressure:body.pressure,
        temperature:body.temperature,
        hygrometry: body.hygrometry,
    });

    await record.save();

    res.json({c: 'ok'});

});
router.post('/user', async (req, res) => {
    const body = req.body;

    const user = new User({
        username: body.username,
        key: body.key,
        role: body.role,
    });

    const newUser = await user.save();

    res.json({user: { 
        username: newUser.username,
        key: newUser.key
     }});

});
router.get('/user', async (req, res) => {
    const users = await userRepository.getUsers({});

    res.json(users);
});
router.delete('/user', (req, res) => {});

export default router;