const express = require('express');
const actions = require('../data/helpers/actionModel');

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

module.exports = router;