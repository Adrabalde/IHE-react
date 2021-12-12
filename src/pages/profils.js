import React, {useEffect, useState} from 'react';

import Profil from './profil';
import {Col} from 'react-bootstrap';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';

import axios from 'axios';

import apiUrl from "../apiUrl";

const Profils = () => {

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
			title: '« Beaucoup d\'échange, beaucoup de débats, de confrontations de points de vue, de découvertes.»',
			description:'CLAIRE HALLÉGOUET',
			image: './images/claire.jpg.webp',
            poste: 'COMMISSARIAT GÉNÉRAL À L\'ÉGALITÉ DES TERRITOIRES',
            annee: 'CYCLE 2016',
		},
        {
			title: '« On a finalement très peu d’occasion de se retrouver dans un groupe avec des acteurs du secteur public, privé, des syndicalistes, des journalistes, etc. Cette expérience a été pour moi très enrichissante. »',
			description:'DOMINIQUE FORGUES',
			image: './images/dominique.jpg.webp',
            poste: 'CAUCHAN RETAIL FRANCE',
            annee: 'CYCLE 2016',
		},
        {
			title: '« Faire ce cycle en milieu de carrière est une bonne chose, on a l\'expérience et on est encore prêt à faire changer les choses. »',
			description:'RAPHAËL TAMPONNET',
			image: './images/raphael.jpg.webp',
            poste: 'LA POSTE BUSINESS UNIT SISVER ECONOMIE',
            annee: 'CYCLE 2017',
		},
        {
			title: '« Le cycle m\'a permis de reconsidérer et dynamiser la dimension “prospective - recherche et développement” de mon poste. »',
			description:'SOPHIE RENARD',
			image: './images/sophie.jpg.webp',
            poste: 'CONSEIL DÉPARTEMENTAL LOIRE-ATLANTIQUE',
            annee: 'CYCLE 2017',
		},
        {
			title: '« L\'Ihedate, c’est une fête pour l\'esprit ! »',
			description:'SYBILLE VINCENDON',
			image: './images/sybylle.jpg.webp',
            poste: 'LIBERATION',
            annee: 'CYCLE 2012',
		},
		{
			title: '« Un groupe très très divers qui met en évidence que l\'on peut se retrouver même si on n\'a pas forcément les mêmes origines ou les mêmes parcours. »',
			description:'THIERRY GOURLAY',
			image: './images/thierry.jpg.webp',
            poste: 'CGT COMITÉ RÉGIONAL BRETAGNE',
            annee: 'CYCLE 2016',
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
										<Profil key={index} profil={value}></Profil> 
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

export default Profils;

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
		maxWidth: '100%',  
		width: '80%',
		minWidth: 900,
	},
	col: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
