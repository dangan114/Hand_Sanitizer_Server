const express = require('express')
const app = express()

const cors = require('cors')

const PORT = 8000;

require('dotenv').config()

app.use(cors())

const indexRoutes = require('./routes/index')

app.use("/", indexRoutes)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})