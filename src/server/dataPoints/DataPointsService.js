const csvtojson = require('csvtojson');
const path = require('path');

const DataPointsService = {};
const DATA_POINTS_FILE = path.join(__dirname, 'data.csv');

DataPointsService.getPoints = function () {
  return csvtojson().fromFile(DATA_POINTS_FILE);
};

module.exports = DataPointsService;