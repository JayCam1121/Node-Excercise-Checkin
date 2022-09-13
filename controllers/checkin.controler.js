const {Checkin} = require('../models/checkin.model');

const getAllIds = async (req, res) => {
    try {
        const register = await Checkin.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                register
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const getOneId = async (req, res) => {
    try {
        const { id } = req.params;

        const register = await Checkin.findOne({where: {id}});

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            });
        }
        res.status(204).json({register});
        
    } catch (error) {
        console.log(error);
    }
};

const createRegister = async (req, res) => {
    try {
        const {entranceTime} = req.body;
        const newRegister = await Checkin.create({entranceTime});

    res.status(201).json({
        status: 'success',
        data: {newRegister},
    });
        
    } catch (error) {
        console.log(error);
    }
};

const updateExit = async (req, res) => {
    try {
        const {id} = req.params; 
        const {exitTime} = req.body;

        const register = await Checkin.findOne({where: {id}});

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            });
        }

        await register.update({exitTime, status: 'out'});

        res.status(200).json({
            status: 'success'
        })
        
    } catch (error) {
        console.log(error);
    }
};

const deleteRegister = async (req, res) => {
    try {
        const {id} = req.params;

        const oneRegister = await Checkin.findOne({where: {id}});

        if (!oneRegister) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            });
        }
        await oneRegister.update({status: 'cancelled'})
        res.status(204).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getAllIds, getOneId, createRegister, updateExit, deleteRegister};
