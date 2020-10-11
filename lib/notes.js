
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

    grabNotes() {
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
            throw new Error("Fill out at least title or text");
        }

       
        const newNote = { title, text, id: shortid.generate() };
        
        return this.grabNotes()
            .then(notes => [...notes, newNote])
            .then(updateNote => this.write(updateNote))
            .then(() => newNote);

    }

    deleteNote(id){
        return this.grabNotes()
        .then(notes=>notes.filter(note=>note.id !==id))
        .then(filteredNotes=>this.write(filteredNotes));
    }



}

module.exports = new saveNotes();









