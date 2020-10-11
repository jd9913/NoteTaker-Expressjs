const router = require('express').Router();

const saveNotes = require('../lib/notes');



//GET request

router.get('/notes', function (req, res) {
    res.send(    
    saveNotes
        .read())
        //.then(note => res.json(note))
      //  .catch(err => res.status(500).json(err));

});

//POST request

router.post('/notes', (req, res) => {
    saveNotes
        .createNote(req.body)
       // .then((note) => res.json(note))
     //   .catch(err => res.status(500).json(err));
     res.send('working')
});

router.delete('/notes/:id', function (req, res) {
    saveNotes
        .deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));


});





module.exports = router;