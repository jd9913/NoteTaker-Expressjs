
const path = require('path');

const fs = require('fs');


const shortid = require('shortid');


console.log(shortid.generate());



class saveNotes {
    write(note) {
        return writeNote('../data/db.json', JSON.stringify(note));
    }

    read() {
        return readNote('../data/db.json', 'utf8');
    }

    grabNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });

    }

    createNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Fill out at least title or text");
        }

        //add unique id to note
        const newNote = { title, text, id: shortid.generate() };

        //grab the notes, add new note and update list

        return this.grabNotes()
            .then(notes => [...notes, newNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => newNote);

    }

    //delete note function

    deleteNote(id) {
        return this.grabNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }



}

module.exports = new saveNotes();









