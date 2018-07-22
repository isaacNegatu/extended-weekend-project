// const express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/pets', (req, res) => {
    console.log('Got to hotel pets GET');
    pool.query('SELECT * FROM "pets" JOIN "owners" ON "pets"."owner_id" = "owners"."id";')
        .then((results) => {
            console.log('Here are the GET results', results);
            res.send(results.rows);
        })
        .catch((errorFromPG) => {
            console.log(errorFromPG);
            res.sendStatus(500);
        });
});

router.get('/owners', (req, res) => {
    console.log('Got to hotel owners GET');
    pool.query('SELECT * FROM "owners";')
        .then((results) => {
            console.log('Here are the GET results', results);
            res.send(results.rows);
        })
        .catch((errorFromPG) => {
            console.log(errorFromPG);
            res.sendStatus(500);
        });
});

router.post('/pets', (req, res) => {
    console.log('POST /pets', req.body);

    const pet = req.body;

    pool.query(`INSERT INTO "pets"
    ("owner_id", "pet", "breed", "color") VALUES($1, $2, $3, $4);`, [pet.owner_id, pet.pet, pet.breed, pet.color])
        .then((results) => {
            console.log('Results from pets POST', results);
            res.sendStatus(201);
        })
        .catch((errorFromPG) => {
            console.log('Error from pets POST', errorFromPG);
            res.sendStatus(500);
        });
});


router.post('/owners', (req, res) => {
    console.log('POST /owners', req.body);

    const newOwner = req.body;

    pool.query(`INSERT INTO "owners"
        ("name") VALUES ($1);`, [newOwner.owner])
        .then((results) => {
            console.log('Results from owners POST', results);
            res.sendStatus(201);
        })
        .catch((errorFromPG) => {
            console.log('Error from owners POST', errorFromPG);
            res.sendStatus(500);
        });
});

router.delete('/pets/:id', (req, res) => {
    console.log('delete router');
    const petGuestID = req.params.id;
    pool.query('DELETE FROM "pets" WHERE "id" = $1', [petGuestID])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error deleting pet', error);
        res.sendStatus(500);
    });
});

module.exports = router;