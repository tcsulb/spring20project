// express framework & create app
const express = require('express');
const app = express();

// form data
const multer = require('multer');
const upload = multer();

//json data
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// set port & start listening
const port = 3000;
const listener = app.listen(port,)