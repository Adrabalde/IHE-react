import React, {useEffect, useState} from 'react';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import apiUrl from "../apiUrl";

const Lesihes = () => {

	const [accueil, setAccueil] = useState({});

	useEffect(() => {
		chargeAccueil();
	}, []);
	
  async function chargeAccueil() {
    try {
      const url = apiUrl + "/api/accueil/1"
      const response = await axios.get(url);
			console.log(response.data);
      setAccueil(response.data);
    } catch (error) {
      console.error(error);
    }
  }

return (
	<div>
		{accueil.id_accueil > 0 && <Wrapper>
			<Title style={{fontFamily:'Lucida'}}>
				{accueil.titre}<br></br>
				<i> {accueil.sous_titre} </i>
			</Title>
		</Wrapper>}
		<br></br>
		<div style={{ paddingLeft:"19%", paddingRight: '19%', fontSize: "22px", textAlign: 'left', paddingTop:'2.5%',
			backgroundColor:'#263f5b', justifyContent: 'center',fontFamily: 'Serif', color:'white'
		}}>
			<i>
				<p>
					{accueil.texte}
				</p>
			</i>
			<p>
				<center>
					<NavLink exact to='./reseau' activeClassName="active" style={styles.btn}>
						Membres
					</NavLink>
					<NavLink exact to='./experiencesihe' activeClassName="active" style={styles.btn}>
						Le réseau IHE
					</NavLink>
				</center>
			</p>
			<br/>
		</div>
	</div>
);
};

export default Lesihes;

const styles = {
	btn: {
	  color: '#263f5b',
	  background: 'white',
	  border: 'solid',
	  textDecoration:'none',
	  paddind: '20px 32px',
	  width: '16px',
	  fontFamily: 'Trebuchet MS',
	  fontSize: '20px',
	  marginRight: '10px',
	  
	},
	
}