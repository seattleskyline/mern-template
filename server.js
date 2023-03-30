const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }))
app.use(bodyParser.json({limit: '50mb'}));

// Database Connection Config
mongoose.connect(
  process.env.DATABASE_URI
).then(
  () => {
    console.log('DB Connected');
  }
).catch( 
  err => {throw err}
)

app.use(express.static('public'));
require('./api/index.js')(app);
require('./src/template/main.js')(app);

app.listen(PORT, () => { 
  console.log(`App is running on port ${PORT}`); 
})