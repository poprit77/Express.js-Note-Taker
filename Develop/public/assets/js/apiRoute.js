const fs = require("fs");
const util = require("util");
const notes = require("./notes");
const app = require("express").Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let noteinfo;

app.get("/notes", (req, res) => {
  readFileAsync("db/db.json", "utf8").then(function (data) {
    note = JSON.parse(data);
  });
});

app.post('/notes', (req,res) =>{
    readFileAsync('db/db.json', 'utf8').then(function(data){
        noteinfo = JSON.parse(data);

        const newNote = req.body;
        const currentNOte = note.length;

        newNote.id = currentNOte +1;

        notes.push(newNote);

        writeFileAsync('db/db.json', notes).then(function(data){
            console/log('new Note');
        });
        res.json(notes);
    })
});


app.delete("/notes/:id", (req, res) => {
    const selID = parseInt(req.params.id);

    for (let i = 0; i < notesData.length; i++) {
      if (selID === notesData[i].id) {
        notesData.splice(i, 1);
        const noteJSON = JSON.stringify(noteinfo, null, 2);
  
        writeFileAsync("db/db.json", noteJSON).then(function () {
          console.log("Note has been deleted.");
        });
      }
    }
    res.json(noteinfo);
  });
  
  
  module.exports = app;