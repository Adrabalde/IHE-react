import React from 'react';
import {Button,Card,Image} from 'react-bootstrap';

import './annonce.css';

const Annonce = (props) => {

  const goToWebSite = (link) => {
    window.location.href = link;
  }

 return (
  <div style={{
    padding:'7%',
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Card style={{
      width: '26rem', 
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 177,
        width: 177,
      }}>
        <Image style={styles.img} src={props.formation.logo} roundedCircle />
      </div>
      
    <Card.Body style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>
      <Card.Title style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'19px',
        fontSize:'19px',
      }}>
        {props.formation.sigle}
      </Card.Title>
      <Card.Text  style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'16px',
        marginBottom:'27px',
        fontSize:'15px',
        textAlign: 'center',
        height: 50,
        overflow: 'auto',
      }}>
        {props.formation.nom_complet}
      </Card.Text>
      <Button style={styles.btn} variant="primary" onClick={() => {goToWebSite(props.formation.website)}} >Site Web</Button>
    </Card.Body>
  </Card>
  </div>
  );
};

export default Annonce;

const styles = {
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  btn: {
    color: 'black',
    background: 'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'16px',
    fontSize:'18px',
    border: 'none',
    padding: 10,
  }
}