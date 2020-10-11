const router = require('express').Router();

const saveNotes = require('../lib/notes');



//GET request

router.get('/notes', function (req, res) {
    res.send(    
    saveNotes
        .read())
      

});

//POST request

router.post('/notes', (req, res) => {
    saveNotes
        .createNote(req.body)
    
     res.send('working')
});

router.delete('/notes/:id', function (req, res) {
    saveNotes
        .deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));


});





module.exports = router;