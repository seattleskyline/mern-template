const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }))
app.use(bodyParser.json({limit: '50mb'}));


app.use(express.static('public'));
require('./src/template/main.js')(app);
// require('./api/index.js')(app);


app.listen(PORT, () => { 
  console.log(`App is running on port ${PORT}`); 
})