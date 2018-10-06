const express = require('express');
const app = express();
const DataPointsService = require('./dataPoints/DataPointsService');

app.use(express.static('dist'));

app.get('/api/getDataPoints', async function (req, res) {

  let dataPoints;

  try {
    dataPoints = await DataPointsService.getPoints();
  }
  catch(error) {
    dataPoints = [];
    console.log('Failed to get data points', error);
  }

  res.json(dataPoints);
});

app.listen(3001, () => console.log('Server Listening...'));
