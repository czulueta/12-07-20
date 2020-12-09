const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/bibles", require("./routes/bibles.js"))

app.listen(8998, () => {
    console.log("the server is running on port 8998")
})