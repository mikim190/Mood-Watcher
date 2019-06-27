import React, { Component } from 'react';
import styled from 'styled-components';
import Quote from './Quote.jsx';
import Quiz from './Quiz.jsx';
import Display from './Chart.jsx';
import axios from 'axios';


const Tittle = styled.h1`
    text-align: center;
    font-size: 60px;
    font-family: "Amatic SC", sans-serif
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

const Left = styled.div`
  height: 300px;
  width: 60%;
  margin-top: 50px;
  margin-left: 100px;
 
`; 

const Right = styled.div`
  height: 300px;
  width: 40%;
  margin-top: 50px;
  margin-right: 100px;
  
`; 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      records: []
    }
    this.addRecord = this.addRecord.bind(this);
    this.getRecords = this.getRecords.bind(this);
  }

  componentDidMount() {
    this.getRecords();
  }

  getRecords() {
    axios.get('/record')
    .then((data) => {
      this.setState({records: data.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  addRecord(data) {
    axios.post('/record', {
      mood: data.mood,
      energy: data.energy,
      text: data.text,
      date: new Date().toLocaleString()
    })
    .then(() => {
      this.getRecords();
    }) 
    .catch((err) => {
      console.log('Can not insert data: ',err)
    })    
  }

  render() {
   const records = this.state.records;
   const mood = records.map(value => value.mood);
   const energy = records.map(value => value.energy);
   const date = records.map(value => value.date);
  
    return (
    <div>

      <Tittle>Mood Tracker</Tittle>
      <Quote />
      <Body>
        <Left>
          <Quiz addRecord={this.addRecord}/>        
        </Left>

       <Right>
        <Display mood={mood} energy={energy} date={date} records={records}/> 
       </Right>
      
      </Body>        

    </div>
    )
  }
};

export default App;