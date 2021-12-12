import React, {useEffect, useState} from 'react';
import Annonce from './annonce';
import {Col} from 'react-bootstrap';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';
import axios from 'axios';

import apiUrl from "../apiUrl";

const Reseau = () => {
	
	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		chargeAnnonces();
	}, []);	
	
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
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',		
		}}>
			<div style={styles.container}>
				<Wrapper>
					<Title>
						Les Instituts des Hautes Etudes <br></br>
						<i> Relier les intelligences </i>
					</Title>
				</Wrapper>
				<div style={{ 
					display: 'flex',
    			justifyContent: 'center',
  			  alignItems: 'center',
					background: '#263f5b',
					width: '100%',}}>
					<div style={{ 
						display: 'grid',
						gridTemplateColumns: '33% 33% 33%', 
						background: '#263f5b',
						maxWidth: '100%',  
						width: '85%',
						minWidth: 900,
					}}>
						{annonces.map((annonce, index) => {
							return (
								<Col style={styles.col}> 
									<Annonce key={index} formation={annonce}></Annonce> 
								</Col>
							)
					})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reseau;

const styles= {
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '50px',
		justifyContent: 'center',
		alignItems: 'center',		
		width: '100%',
	},
	col: {
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	}
}

