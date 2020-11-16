const router = require('express').Router();

const shortid = require('shortid');

// const createNote = require('../lib/notes');
// const deleteNote = require('../lib/notes');
const fs=require('fs');
const path=require("path");
const db=path.join(__dirname, "../data/db.json");


//GET request

router.get('/notes', function (req, res) {
    res.sendFile(db);
   
});

router.get("/notes/:id", function (req, res){
    const { id }=req.params;
    let savedNotes=JSON.parse(fs.readFileSync(db, "utf8"));

    for(let i =0; i<savedNotes.length; i++){

        if (savedNotes[i].id===id){
            return res.send(savedNotes[i])
        }
    }
   res.send('no match found');
})

router.post('/notes', (req, res) => {
    let savedNotes=JSON.parse(fs.readFileSync(db, "utf8"));
    let newNote=req.body;
   newNote.id= shortid.generate();
   savedNotes.push(newNote);

   fs.writeFileSync(db, JSON.stringify(savedNotes));
   console.log("note saved");
   
   res.json(savedNotes);

    
});

router.delete('/notes/:id', function (req, res) {
    let savedNotes=JSON.parse(fs.readFileSync(db, "utf8"));
    let noteId=req.params.id;
    let newId = shortid.generate();
    savedNotes=savedNotes.filter(selNote=>{
        return selNote.id !=noteId;
    })
   
    fs.writeFileSync(db, JSON.stringify(savedNotes));
    res.json(savedNotes);

});





module.exports = router;