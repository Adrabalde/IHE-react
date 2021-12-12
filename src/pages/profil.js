import React from 'react';
import {Card,Image} from 'react-bootstrap';


const Profil = (props) => {
  console.log(props)
  return (
    <div style={{
      display: 'flex',
      width:'100%',
      padding:'10%',
      height: '550px',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Card style={{
        width: '26rem',
        height: '100%', 
        backgroundColor: 'transparent',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
         height: '100%',
        width: '100%',
      }}>
        <Image style={styles.img} src={props.profil.photo} roundedCircle />
      </div>
      
    <Card.Body style={{
        display: 'flex',
        height: '100%',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Card.Text style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: '10px 0px',
        fontSize:'16px',
        textAlign: 'center',
        overflow: 'auto',
      }}>
        {props.profil.avis}
      </Card.Text>
      <Card.Text  style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'15px',
        textAlign: 'center',
        overflow: 'auto',
      }}>
        {props.profil.nom_prenom}
      </Card.Text>
      <Card.Text  style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'15px',
        textAlign: 'center',
      }}>
        {props.profil.poste}
      </Card.Text>
      <Card.Text  style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'15px',
        textAlign: 'center',
        overflow: 'auto',
      }}>
        {props.profil.annee_formation}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  );
};

export default Profil;

const styles = {
  img: {
    objectFit: 'cover',
    height: 180,
    width: 180,
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