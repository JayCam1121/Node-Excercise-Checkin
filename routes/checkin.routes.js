const express = require('express');

const {createRegister, deleteRegister, getAllIds, getOneId, updateExit } = require('../controllers/checkin.controler');

const {Checkin} = require('../models/checkin.model');

const checkinRouter = express.Router();

checkinRouter.get('/', getAllIds);

checkinRouter.get('/:id', getOneId);

checkinRouter.post('/', createRegister);

checkinRouter.patch('/:id', updateExit);

checkinRouter.delete('/:id', deleteRegister);

module.exports = {checkinRouter};