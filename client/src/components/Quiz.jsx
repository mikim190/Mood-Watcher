import React, { Component } from 'react';
import styled from 'styled-components';
import sad from '../../Icons/cry.png';
import angry from '../../Icons/sad.png';
import emotionless from '../../Icons/none.png';
import happy from '../../Icons/smile.png';
import red from '../../Icons/red.png';
import orange from '../../Icons/orange.png';
import yellow from '../../Icons/yellow.png';
import green from '../../Icons/green.png';
import {Form, Button, ButtonToolbar, Container, Figure} from 'react-bootstrap';

const Col = styled.div`
  margin: 20px;
`;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    
  }

  handleClick(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  resetForm() {
    document.getElementById('form').reset();
    this.setState({
      mood: 0,
      energy: 0,
      text: ''
    })
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();    
    this.props.addRecord(this.state);

    this.resetForm();
    
  }

  render() {
  
    return (    
      <Form id='form' noValidate onSubmit={(e) => this.handleSubmit(e)}>
       
        <Form.Label style={{fontSize:'20px', marginTop:'30px'}}>How do you feel?</Form.Label>
      
          <ButtonToolbar>
            <Col><Button onClick={(e) => this.handleClick(e)} name='mood' variant='outline-primary' value={1}><Figure.Image src={angry} width={60} height={60} ></Figure.Image></Button></Col>
            <Col><Button onClick={(e) => this.handleClick(e)} name='mood' variant='outline-primary' value={2}><Figure.Image src={sad} width={60} height={60}></Figure.Image></Button></Col>
            <Col><Button onClick={(e) => this.handleClick(e)} name='mood' variant='outline-primary' value={3}><Figure.Image src={emotionless} width={60} height={60}></Figure.Image></Button></Col>
            <Col><Button onClick={(e) => this.handleClick(e)} name='mood' variant='outline-primary' value={4}><Figure.Image src={happy} width={60} height={60}></Figure.Image></Button></Col>
          </ButtonToolbar>
      
        <Container>
          <Form.Label style={{fontSize:'20px', marginTop:'10px'}}>What is your energy level?</Form.Label>
       
            <ButtonToolbar>
              <Col><Button onClick={(e) => this.handleClick(e)} name='energy' variant='outline-success' value={1}><Figure.Image src={red} width={40} height={40}></Figure.Image></Button></Col>
              <Col><Button onClick={(e) => this.handleClick(e)} name='energy' variant='outline-success' value={2}><Figure.Image src={orange} width={40} height={40}></Figure.Image></Button></Col>
              <Col><Button onClick={(e) => this.handleClick(e)} name='energy' variant='outline-success' value={3}><Figure.Image src={yellow} width={40} height={40}></Figure.Image></Button></Col>
              <Col><Button onClick={(e) => this.handleClick(e)} name='energy' variant='outline-success' value={4}><Figure.Image src={green} width={40} height={40}></Figure.Image></Button></Col>
            </ButtonToolbar>
        
          <Form.Group>
            <Form.Label style={{fontSize:'20px', marginTop:'10px'}}>Write your thought here!</Form.Label>
            <Form.Control style={{width: '50%'}} onChange={(e) => this.handleChange(e)} as="textarea" rows="5"/>
          </Form.Group>
        </Container>
        <ButtonToolbar style={{position: 'left'}}>
          <Button variant='primary' type='submit'>Submit</Button>
        </ButtonToolbar>
       
      </Form>
     
    )
  }
};

export default Quiz;