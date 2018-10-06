import axios from 'axios';

const DataPointsService = {};

DataPointsService.getPoints = function () {
  return axios.get('/api/getDataPoints')
    .then(response => response.data)
    .then(transformDataPoints)
    .catch(error => {
      console.log('Error retrieving nutmeg plot data points', error);
      return [];
    });
};

function transformDataPoints(points) {
  return points.map(({x, y}) => ({ x: Number(x), y: Number(y)}));
}

export default DataPointsService;