import React, { Component } from 'react';
import ScatterPlot from '../ScatterPlot/ScatterPlot';
import DataPointsService from '../../services/DataPointsService';

export default class ScatterPlotContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  static adaptToScatterPlot(pointsDescriptor) {
    return pointsDescriptor.map(({x,y}) => {
      return [x, y];
    });
  }

  async componentDidMount() {
    const points = await DataPointsService.getPoints();
    this.setState({ points: ScatterPlotContainer.adaptToScatterPlot(points) });
  }

  render() {
    const warning = !this.state.points.length ? 'No data points available.' : null;
    return (<section>
      {warning ? <p>{warning}</p> :
        <ScatterPlot name="Scatter Plot" points={this.state.points}/>
      }
    </section>);
  }
};