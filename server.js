// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes and Start up an instance of app
const express = require('express');
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
//callback listening
const server = app.listen(port, () => console.log(`Server running on localhost port: ${port}`));
/* SETUP PART DONE */

/* Posting, getting and storing data on request: */
//GET
app.get('/all', (req, res) => res.send(projectData));
//POST
app.post('/add', (res, req) => res.send('POST recieved!'));
//Store data on server side:
const data = [];
app.post('/addEntry', addEntry);

//function that stores data
function addEntry(req,res) {
   projectData.newEntry = {
     entryDate: req.body.date,
     temperature: req.body.temperature,
     feelings: req.body.feelings,
   }
  console.log(projectData.newEntry);
}
/*POST, GET  and storing data done */
