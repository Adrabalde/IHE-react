import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@material-ui/core'
import axios from 'axios';

import apiUrl from "../apiUrl";



const Slider = () => {

	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		chargeAnnonces();
	}, []);
	const annonnceID = [ 11, 9, 5, 7, 6, 8]
	
  async function chargeAnnonces() {
		console.log("Je Charge les annonces dans l'api")
    try {
      const url = apiUrl + "/api/instituts"
      const response = await axios.get(url);
      setAnnonces(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function Item(props) {
    return (
      <Paper style={styles.card} elevation={5}>
        <a style={styles.link} href={props.item.website}>
          <div style={styles.item}>
            <div style={styles.imgContainer}>
              <img alt="logo" style={styles.img} src={props.item.logo}  />
            </div>	
            <p style={styles.desc}>
              {props.item.descriptif_formation}
            </p>
          </div>
        </a>
      </Paper>
    )
  }

  return (
    <Carousel autoPlay={true} animation={'slide'} interval={4000} > 
      {
        annonces.length && annonnceID.map((id, i) => <Item key={i} item={annonces[id]} />)
		

      }
    </Carousel>

  )
}

export default Slider;

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    margin: 5,
    marginTop: 25,
    backgroundColor: '#eeeeee',
  },
  link: {
    textDecoration : 'none',
  },
  item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: '10px 0px',
		maxWidth: '1000px',
        textDecoration: 'none',
	},
	imgContainer: {
		height: 200,
		minWidth: 170,
		width: 'auto',
	},
	img: {
		height: 170,
		width:213 ,
		objectFit: 'contain',
		width: 'fit-content',
	},
	desc: {
		fontSize: 20,
		padding: '0 30px',
		color: '#263f5b',
	}
}