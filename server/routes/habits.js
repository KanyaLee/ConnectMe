const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit')

//Get all habits

router.post('/', async (req,res) => {
    try {
        const newHabit = new Habit(req.body);
        const savedHabit = await newHabit.save();
        res.status(200).json(savedHabit);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.get('/:userId', async(req,res) => {
    try {
        const habits = await Habit.find({user:req.params.userId});
        res.json(habits);
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}); 

router.put('/:habitId', async(req, res) => {
    try {
        const updateHabit = await Habit.findByIdAndUpdate(
            req.params.habitId, 
            req.body, 
            {new:true}
        );
        res.json(updatedHabit);
    } catch (error) {
        res.status(400).json({message: error.message }); 
    }
})

module.exports = router;
