import React from "react";
// import './Person.css';
import styled from 'styled-components'


const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

@media (min-width: 500px) {
    width: 450px;
}`;


const Person = (props) => {
  return (
    <StyleDiv>
      <div className='Person'>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!
      </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyleDiv>
  );
};

export default Person;
