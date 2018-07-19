const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/pets', (req, res) => {
    console.log('Got to hotel GET');
    pool.query('SELECT * FROM "pets";')
    .then((results) => {
        console.log('Here are the GET results', results);
        res.send(results.rows);
    })
    .catch((errorFromPG) => {
        console.log(errorFromPG);
        res.sendStatus(500);
    });
});

// router.post('/', (req, res) => {
//     console.log('Got to pets POST');
//     console.log('Here is req.body', req.body);

//     const hotel = req.body;

//     pool.query(`INSERT INTO "pets"
//     ("",`)
    
    
// })

module.exports = router;