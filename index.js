const express = require('./config/express');
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);
require('dotenv').config();

const app = express();
const PORT = process.env.NODE_PORT;

app.listen(PORT, function(){
    console.log(`Server At Port ${PORT}`);
})
