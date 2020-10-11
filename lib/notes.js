
const path = require('path');

const fs=require('fs');


const shortid = require('shortid');


console.log(shortid.generate());



class saveNotes {
    write(note) {
        return writeNote('/data/db.json', JSON.stringify(note));
    }

    read() {
        return readNote('/data/db.json', 'utf8');
    }

    getNotes() {
        return this.read().then(notes => {
            let parsedNote;
            try {
                parsedNote = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNote = [];
            }
            return parsedNote;
        });

    }

    createNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("have to fill out at least title or text");
        }

        const createNewNote = { title, text, id: shortid.generate() };
        return this.getNotes()
            .then(notes => [...notes, createNewNote])
            .then(updateNote => this.write(updateNote))
            .then(() => createNewNote);



    }



}

module.exports = new saveNotes();









