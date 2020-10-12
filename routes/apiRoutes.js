const router = require('express').Router();

const createNote = require('../lib/notes');
const deleteNote = require('../lib/notes');


//GET request

router.get('/notes', function (req, res) {

    createNote();
});

//POST request

router.post('/notes', (req, res) => {
    createNote(req.body);

    res.send('working')
});

router.delete('/notes/:id', function (req, res) {
    deleteNote(req.params.id)

});





module.exports = router;