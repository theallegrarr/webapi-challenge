const express = require('express');
const actions = require('../data/helpers/actionModel');
const project = require('../data/helpers/projectModel');

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
    actions.get(req.params.id)
           .then(result => {
            res.status(200).json(result);
           })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `error fetching data`});
            })
})

router.post('/', validateAction, validateProjectId, (req, res) => {
    actions.insert(req.body)
           .then(result => {
            res.status(200).json(result);
           })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `error inserting action`});
            })
})


// Middlewares
function validateId(req, res, next) {
    actions.get(req.params.id)
           .then(data => {
               
               if(data){
                   req.project = data;
                   next();
                } else {
                    res.status(400).json({ message: `Action ID not valid`});
                }
            })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `Error getting Action`})
           })
}

function validateProjectId(req, res, next) {
    projects.get(req.body.project_id)
           .then(data => {
               
               if(data){
                   req.project = data;
                   next();
                } else {
                    res.status(400).json({ message: `Project ID not valid`});
                }
            })
           .catch(err => {
               console.log(err);
               res.status(400).json({ message: `Error finding project`})
           })
}

function validateAction(req, res, next) {
    if(!req.body.description){
        res.status(400).json({ message: `Action description is required`})
    }
    if(!req.body.notes){
        res.status(400).json({ message: `Action note is required`})
    }
    next();
}

module.exports = router;