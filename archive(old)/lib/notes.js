
const path = require('path');
const fs = require('fs');
const db=require("../../../data/db.json");



const shortid = require('shortid');


let parsedNotes = [];

function createNote(parsedNotes) {
    let newNote = {
        uniqueId: shortid.generate(),
        title: req.body.title,
        text: req.body.text
    };

    fs.readFileSync(db, "utf8", (err, data) => {
        if (err) throw err;

        parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFileSync(db, JSON.stringify(parsedNotes, null, 2), err => {
            if (err) throw err;
            res.send(db)
            console.log("creation successful!")
        });
    });
    return parsedNotes;
};


//delete note function

function deleteNote(parsedNotes) {
    

    fs.readFileSync(db, "utf8", (err, data) => {
        if (err) throw err;

        let idNote = data.id;
        parsedNotes = JSON.parse(data);
        newParsedNotes = parsedNotes.filter(note = note.id != idNote);
        fs.writeFileSync(db, JSON.stringify(newParsedNotes, null, 2), err => {
            if (err) throw err;
            res.send(db);
            console.log("deletion successful!")
        });
    });

};




module.exports = (createNote, deleteNote);












