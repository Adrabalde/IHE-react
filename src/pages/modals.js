import styled from 'styled-components';

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

export const Div = styled.div`
    display: 'grid',
	justifyContent: 'center',
	alignItems: 'center',
	gridTemplateColumns: '33% 33% 33%', 
	background: '#263f5b',
	maxWidth: '100%',  
	width: '80%',
	minWidth: 900,
    @media (max-width: 800px) {
        gridTemplateColumns: '49.5% 49.5%',
    }
`;