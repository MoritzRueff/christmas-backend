import express from 'express'
import mongoose from 'mongoose'
import {    getFullChristmas, 
            getChristmas, 
            postChristmas, 
            updateChristmas, 
            deleteChristmas } from './controllers/christmas.controller.js'


const server = express()

mongoose.connect("mongodb://localhost:27017/christmas-factory");


server.use(express.json())

server.get('/christmas', getFullChristmas);
server.get('/christmas/:christmasId', getChristmas);
server.post('/christmas', postChristmas);
server.put('/christmas/:christmasId', updateChristmas);
server.delete('/christmas/:christmasId', deleteChristmas);

server.put('/christmas/:christmasId', async (req, res) => {
    const christmasId = req.params.christmasId;
    const christmas = req.body;
  
    const updatedChristmas = await ChristmasProduct.findByIdAndUpdate(christmasId, christmas, {
      returnDocument: 'after',
    });
    res.json(updatedChristmas);
  });
  
  server.delete('/christmas/:christmasId', async (req, res) => {
    const christmasId = req.params.christmasId;
    try {
      const result = await ChristmasProduct.findByIdAndDelete(christmasId);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'This Christmas product could not be found!' });
      }
    } catch (error) {
      res.json(error);
    }
  });

server.listen(4002, () => {
    console.log("Christmas-Server is up and running")
})