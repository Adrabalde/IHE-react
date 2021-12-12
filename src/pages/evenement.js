import React from 'react';
import {Card,Image} from 'react-bootstrap';


const Evenement = (props) => {
  console.log(props)
  return (
    <div style={{
      display: 'flex',
      width:'7                                                                         00px',
      padding:'1%',
      height: '800px',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
        <Card style={{
        width: '100%',
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
            <Image style={styles.img} src={props.profil.photo} />
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
        {props.profil.titre}
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
        {props.profil.dateLieu}
      </Card.Text>
      <Card.Text  style={{
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'15px',
        textAlign: 'center',
      }}>
        {props.profil.slogan}
      </Card.Text>
     
    </Card.Body>
  </Card>
  </div>
  );
};

export default Evenement;

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