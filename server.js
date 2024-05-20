const express = require('express')
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/connection');
dotenv.config()
connectDB();

const app = express()


const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/test', require("./Routes/testRoute"))

app.listen(PORT, () => {
    console.log(
        `Node server running on ${PORT}`
            .bgBlue.white);
})