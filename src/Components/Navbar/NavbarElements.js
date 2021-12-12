import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
position: fixed;
display: flex;
background: #263f5b;
height: 300px;
width: 100%;
justify-content: center;
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: white !important;
font-size: 20px;
display: flex;
margin-left:30px;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
&.active {
	color: #000000 !important;
}
&:active {
	color: #000000 !important;
}
&:hover {
	color: #000000 !important;
}
`;

export const Li = styled.li`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px;
  margin-left: 10px;
  display: inline-flex;
  height: 100%;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    padding: 1px 01px;
    margin-left: 10px;
    
  }

  a:hover,
  a.active {
    background-color: 000000;
    border-radius: 1px;
    color: #000;
    transition: all 0.5ms ease-in-out;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
`;

export const Bars = styled(FaBars)`
display: none;
color: #FFF;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #FFF;
}
`;

export const Titre = styled.h4`
display: flex;
color:white;
padding-left:27%;
padding-top:125px;
font-size:15px;
position:absolute;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const CardWrapper = styled.div`
  display: flex;

  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 3.5em;
  font-family: normal normal normal 18px/1.75em raleway,sans-serif;
  text-align: center;
  color: #263f5b;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  width:100%;
  padding-top:50px;
  height: '60vh';

`;

 

