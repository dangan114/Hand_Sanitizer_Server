const express = require('express')
const app = express()

const PORT = 8000;

require('dotenv').config()

const indexRoutes = require('./routes/index')

app.use("/", indexRoutes)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})