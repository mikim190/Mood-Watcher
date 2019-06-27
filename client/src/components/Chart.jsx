import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const Main = styled.div`
  margin-left: 50px;
`;

class Display extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: true
        },
          id: 'apexchart-example',
          stacked: false
        },
        grid: {
          row: {
            colors: ['#c2d4dd', '#ddeedd', '#b7d7e8', '#fbefcc'],
            opacity: 0.5
          },
        },
        style: {
          fontSize: '12px',
          marginRight: '10px'
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          x: {
              format: 'MM/dd/yyyy HH:mm',    
          },
        },

        xaxis: {
          type: 'datetime',   
        },
        yaxis: [{
          min: 0,
          max: 4,
          tickAmount: 4,
          axisBorder: {
            show: true,
            color: '#405d27'
          },
        }]
      }
      
    }
  }
  


  render() {
   
    const series = [
      {
        name: 'Mood',
        data: this.props.records.map((record) => {
          const results = {};
          results.x = record.date;
          results.y = record.mood;
          return results;
        })
      },
      {
        name: 'Energy',
        data: this.props.records.map((record) => {
          const results = {};
          results.x = record.date;
          results.y = record.energy;
          return results;
        })
      }
    ]

    const moodAvg = Math.floor(this.props.mood.reduce((a,b) => {
      return a + b
    }, 0) / (this.props.mood.length));
    
    const energyAvg = Math.floor(this.props.energy.reduce((a,b) => {
      return a + b
    }, 0) / (this.props.energy.length));
   
  
    return (
     <div>

      <Main className='w3-quarter'>
        <div className="w3-container w3-blue w3-padding-16">
          <div className="w3-left"><i className="fa fa-eye w3-xxxlarge"></i></div>
          <div className="w3-right">
            <h3>{(moodAvg) ? moodAvg : 0}</h3>
          </div>
          <div className="w3-clear"></div>
          <h4>Mood Average</h4>
        </div>
      </Main>

      <Main className='w3-quarter'>
        <div className="w3-container w3-teal w3-padding-16">
          <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge"></i></div>
          <div className="w3-right">
            <h3>{(energyAvg) ? energyAvg : 0}</h3>
          </div>
          <div className="w3-clear"></div>
          <h4>Energy Average</h4>
        </div>
      </Main>
        
        <Chart options={this.state.options} series={series} type="area" width={600} height={400} />

        </div>      
  
    )
  }
}

export default Display;