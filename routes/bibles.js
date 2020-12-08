const express = require("express")
const bibleRouter = express.Router()
const { v4:uuidv4 } = require("uuid")

const bibles = [
    { "title" : "King James 1611", "author" : "king james", _id: uuidv4() },
    { "title" : "Apocrypha", "author" : "king james", _id: uuidv4() },
    { "title" : "Pseudepigrapha", "author" : "r.h. charles", _id: uuidv4() },
    { "title" : "Enoch", "author" : "r.h. charles", _id: uuidv4() }
]

bibleRouter.get("/:bibleId", (req, res) => {
    const bibleId = req.params.bibleId 
    const bibleFound = bibles.find( bible => bible._id === bibleId)
    res.send(bibleFound)
})
bibleRouter.route("/")
    .get((req, res) => {
        res.send(bibles)
    })
    .post((req, res) => {
        const newBible = req.body
        newBible._id = uuidv4()
        bibles.push(newBible)
        res.send(`Successfully added ${newBible.title} to the database`)
    })

