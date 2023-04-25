import express from 'express';
import profileModel from '../models/profile.model.js';

const router = express.Router();

export const getProfile = async (req, res) => {
    try {
        const profile = await profileModel.find();
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const saveProfile = async (req, res) => {
    const profile = req.body;
    const newProfile = new profileModel({...profile, createdAt: new Date().toISOString(),})

    try {
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export default router;
