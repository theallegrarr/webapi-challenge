const express = require('express');
const actions = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    actions.get()
           .then(result => {
            res.status(200).json(result);
           })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `error fetching data`});
            })
})

router.get('/:id', validateId, (req, res) => {
    res.status(200).json(req.project);
})



// Middlewares
function validateId(req, res, next){
    actions.get(req.params.id)
           .then(data => {
               if(data){
                   req.project = data;
                   next();
                }
               res.status(400).json({ message: `ID not valid`});
            })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `Error getting ID`})
           })
}

module.exports = router;