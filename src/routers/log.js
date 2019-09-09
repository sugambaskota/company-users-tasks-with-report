const express = require('express');
const auth = require('../middleware/auth');
const Log = require('../models/log');
const router = express.Router();
const moment = require('moment');

router.get('/log/:id', auth, async (req, res) => {
    try {
        const timeNow = moment();
        await Log.create({
            userId: req.user.id,
            action: `GET /log/${req.params.id}`,
            time: timeNow
        });
        const log = await Log.findAll({
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        });
        res.status(200).json(log);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/log', auth, async (req, res) => {
    try {
        const timeNow = moment();
        await Log.create({
            userId: req.user.id,
            action: 'GET /log',
            time: timeNow
        });
        const log = await Log.findAll({
            where: {
                userId: req.user.id
            }
        });
        res.status(200).json(log);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;