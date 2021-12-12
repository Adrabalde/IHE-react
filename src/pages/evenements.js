import React, {useEffect, useState} from 'react';

import Evenement from './evenement';
import {Col} from 'react-bootstrap';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';

import axios from 'axios';

import apiUrl from "../apiUrl";

const Evenements = () => {

	const [profils, setProfils] = useState([]);

	useEffect(() => {
		chargeProfils();
	}, []);
	
  async function chargeProfils() {
    try {
      const url = apiUrl + "/api/auditeurs"
      const response = await axios.get(url);
      setProfils(response.data);
    } catch (error) {
      console.error(error);
    }
  }

		const annonces = [
		{
			image: './images/claire.jpg.webp',
            titre: 'Event',
            dateLieu: '09 janv 2025 à 11:30 \n San Francisco, CA, USA',
            slogan: 'Don\'t Miss Out',
		},
        {
			image: './images/dominique.jpg.webp',
            titre: 'Event',
            dateLieu:'06 fevr 2025 à 10:00 \n San Francisco, CA, USA',
            slogan: 'Nothing Like It',
		},
        {
			image: './images/raphael.jpg.webp',
            titre: 'Event',
            dateLieu: '17 mars 2025 à 11:30 \n San Francisco, CA, USA',
            slogan: 'Join Us',
		},		
	];
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',		
		}}>
			{ profils.length > 0 &&
				<div style={styles.container}>
					<Wrapper>
						<Title style={{fontFamily:'Lucida'}}>
							<u>Les Instituts des Hautes Etudes </u><br></br>
							<i> Relier les intelligences </i>
						</Title>
					</Wrapper>
					<div style={{ 
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#263f5b',
						width: '100%',
					}}>
						<div style={styles.containerCards} >
							{profils.map((value, index) => {
								return (
									<Col style={styles.col} key={index}> 
										<Evenement key={index} profil={value}/>
									</Col>
								)
							})}
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default Evenements;

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '50px',
		justifyContent: 'center',
		alignItems: 'center',		
		width: '100%',
	},
	containerCards: {
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		gridTemplateColumns: '33% 33% 33%', 
		background: '#263f5b',
		maxWidth: '100px',  
		width: '100px',
		minWidth: 900,
	},
	col: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
