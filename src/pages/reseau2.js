import React, {useEffect, useState} from 'react';
import axios from 'axios';

import apiUrl from "../apiUrl";

const Reseau2 = () => {

	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		chargeAnnonces();
	}, []);
	const annonnceID = [ 11, 9, 5, 7, 6, 8]
	
  async function chargeAnnonces() {
		console.log("Je Charge les annonce dans l'api")
    try {
      const url = apiUrl + "/api/instituts"
      const response = await axios.get(url);
      setAnnonces(response.data);
    } catch (error) {
      console.error(error);
    }
  }

	return (
			<div style={styles.container}>
				<div style={styles.titleContainer}>
					<h1 style={styles.title} >Les Instituts des Hautes Etudes</h1>
					<h1 style={styles.title2} ><i>Relier les intelligences</i></h1>
				</div>
				
				{annonces.length > 0  && 
					annonnceID.map((id, index) => {
						if (index % 2 == 0) {
							return (
								<div style={styles.item}>
									<p style={styles.desc}>
										{annonces[id].presentation}
									</p>
									<div style={styles.imgContainer}>
										<img alt="logo" style={styles.img} src={annonces[id].logo}  />
									</div>	
								</div>
							)
						} else {
							return (
								<div style={styles.item}>
									<div style={styles.imgContainer}>
										<img alt="logo" style={styles.img} src={annonces[id].logo}  />
									</div>	
									<p style={styles.desc}>
										{annonces[id].presentation}
									</p>
								</div>
							)
						}
					})
				}
			</div>
	);
};

export default Reseau2;

const styles = {
	container: {
		display: 'flex',
		width: '100%',
		height: 'auto',
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleContainer: {
		margin: '60px 0px 80px 0px',
		textAlign: 'center',
	},
	title: {
		fontSize: '3.5em',
		color: '#263f5b',
		fontFamily: '"Times New Roman", Times, serif',
	},
	title2: {
		margin: '5px 0px',
		fontSize: '3.5em',
		color: '#263f5b',
		fontFamily: '"Times New Roman", Times, serif',
	},
	item: {

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: '20px 0px',
		maxWidth: '1000px',
	},
	imgContainer: {
		height: 180,
		minWidth: 170,
		width: 'auto',
	},
	img: {
		height: 170,
		objectFit: 'contain',
		width: 'fit-content',
	},
	desc: {
		fontSize: 20,
		padding: '0 30px',
		color: '#263f5b',
	}
}