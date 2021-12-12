import React from 'react';
import Slider from '../Components/Slider';
import styled,{createGlobalStyle } from 'styled-components';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';







createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
 
  a {
    text-decoration: none;
    font-weight: bold;
    color: deeppink;
  }
`;

const Page = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;


const Formation = () => {
return (
	<Page style={{backgroundColor:'#263f5b', width:'100%'}}>
    <Wrapper style= {{backgroundColor:'white'}}>
    <Title style={{fontFamily:'Lucida'}}>
    Les Instituts des Hautes Etudes <br/>
    <i> Relier les intelligences </i>
  </Title>
      <Slider />
		</Wrapper>
  </Page>
);
};

export default Formation;
