import React, { Component } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const Block = styled.div`
  display: block;
  margin-left: 30px;
  font-size: 30px;
  color: blue;
  margin-top: 20px;
  background: #eaeff5;
  text-align: center;
  font-family: "Amatic SC", sans-serif
`;

class Quote extends React.Component {

  constructor() {
    super();

    this.state = {
      quote: '',
    }
  }

  render() {
    return (
    <div>
      <Block>
        The sun will rise and we will try again! 
      </Block>   

    </div>
    )
  }
};

export default Quote;