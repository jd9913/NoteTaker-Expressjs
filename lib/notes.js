
const path = require('path');

const fs = require('fs');

let parsedNotes = [];

const writeNote = fs.writeFile;


const shortid = require('shortid');


console.log(shortid.generate());



class saveNotes {

    write(note) {
        return writeNote(path.join(__dirname, '../data/db.json'), JSON.stringify(note), function (err) {
            if (err) {
                console.log(err);
            }
        });
    }

    read() {
        let seeNotes = fs.readFileSync(path.join(__dirname, '../data/db.json'), 'utf8', function (err) {
            if (err) {
                console.log(err);
            }
        });
        // console.log(seeNotes);
        return seeNotes;
    }

    grabNotes() {
        return this.read()
    }

    createNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Fill out at least title or text");
        }

        //add unique id to note
        const newNote = { title, text, id: shortid.generate() };

        //grab the notes, add new note and update list
        let x = this.read();
        parsedNotes.concat(x);

        parsedNotes.push(newNote);

        console.log(parsedNotes, 'notes');
        console.log(x, 'xs spot');

        return this.write(parsedNotes);
    }
    
    

    //delete note function

    deleteNote(id) {
        return this.grabNotes()
            .then(note => note.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }



}

module.exports = new saveNotes();









