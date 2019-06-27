const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const { insertNewData, getAllData } = require('../data/query.js');
const path = require('path');
const PORT = 3010;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/record', (req, res) => {
  getAllData()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
});

app.post('/record', (req, res) => {
   
    insertNewData(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});
