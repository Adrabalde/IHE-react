import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import apiUrl from "../apiUrl";

const ExperienceIHE = () => {

	const [experience, setExperience] = useState({});

	useEffect(() => {
		chargeExperience();
	}, []);
	
  async function chargeExperience() {
    try {
      const url = apiUrl + "/api/experience/1"
      const response = await axios.get(url);
			console.log(response.data);
      setExperience(response.data);
    } catch (error) {
      console.error(error);
    }
  }

	return (
		<div style={ styles.container }>

			{experience.id_experience && <div style={styles.whiteContainer}> 
				<h1 style={{fontFamily:'Lucida', fontSize:'35px', color:'rgb(38, 63, 91)', textAlign: 'center'}}>
					{experience.titre}
				</h1><br/>
				<div style={styles.containerText}>
					{experience.texte}
					<NavLink exact to='./reseau' style={styles.link}>
						<div style={styles.btn}>
							Le reseau IHE
						</div>
					</NavLink>
				</div>
			</div>}
		</div>
	);
};

export default ExperienceIHE;

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		backgroundImage:'url("./images/expeback.webp")'
	},
	whiteContainer: {
		backgroundColor: 'white',
		width: '70%',
		margin: '240px 0px 10px 0px',
		padding: '29px 0px',
	},
	containerText: { 
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
    alignItems: 'center',
		paddingLeft: '3%',
		paddingRight: '3%',
		paddingTop: '15px',
		fontSize: 18,
		textAlign: 'left',
		paddingTop:'2.5%',
		fontFamily: 'Trebuchet MS',
		color:'rgb(38, 63, 91)'
	},
	link: {
		marginTop: '500px',
		textDecoration:'none',
	},
	btn: {
		display: 'flex',
		alignItems: "center",
		height: 60,
	  color: 'white',
	  padding: '0 32px',
	  background: 'rgb(38, 63, 91)',
	  border: 'none',
	},
}

					// <p>Conçus par l'État dès 1936 (IHEDN) pour sensibiliser largement aux enjeux stratégiques de défense nationale, 
					// 	les IHE ont pour vocation d'offrir à leurs auditrices et auditeurs une intelligence systémique des domaines 
					// 	étudiés et d'apporter tout éclairage sur les éléments et problématiques stratégiques pour l'Etat comme pour le privé.
					// </p>
					// <p>
					// 	Cette compréhension \n étendue alliée à la possibilité de traiter les questions et besoins plus personnels des auditeurs \
					// 	est indispensable pour les parcours d'excellence : pour bien agir, il est nécessaire par domaine, de connaître les enjeux \
					// 	et les déterminants ainsi que les positions et stratégie des acteurs.
					// </p>
					// <p>
					// 	Ce sont les seules formations en France positionnées à la confluence de l'Etat, du législateur, de l’université, 
					// 	de la recherche, de la fonction publique, de l’entreprise et des acteurs de la formation. 
					// </p>​
					// <p>
					// 	L'expérience IHE est conçue pour permettre :
					// <ul>
					// <li>
					// 	- l'acquisition de la matière nécessaire pour appréhender en profondeur les enjeux des domaines étudiés et les problématiques des acteurs 
					// </li>
					// <li>
					// 	- l'intégration de réflexes, outils et savoir faire améliorant l'opérationabilité des acteurs dans leur leadership, leurs prises de décisions,
					// 	leur communication, 
					// </li>
					// </ul>
					// </p>
					// <p>
					// 	Compte tenu de la composition des sessions nationales assurant la participation de professionnels d'excellents niveaux mais de parcours et 
					// 	d'univers très divers, les logiques et les outils d'innovation, de collaboration, de développement d'une intelligence agile et collective, 
					// 	sont hautement favorisés et développés.
					// </p>