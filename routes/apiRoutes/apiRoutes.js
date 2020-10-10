const router = require('express').Router();

const saveNote = require('../db/saveNote');

//GET request

router.get('/notes', function (req, res) {
    saveNote
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//POST request

router.post('/notes', (req, res) => {
    saveNote
        .createNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});





module.exports = router;