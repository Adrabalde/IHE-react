import React, {useEffect, useState} from 'react';
import {Title,Wrapper} from '../Components/Navbar/NavbarElements';
import axios from 'axios';

import apiUrl from "../apiUrl";

const Pedagogie = () => {
  // const str = "<p>L'expérience IHE est conçue pour permettre :</p><p>- l'acquisition de la matière nécessaire pour appréhender en profondeur les enjeux des domaines étudiés et les problématiques des acteurs.<br />- l'intégration de réflexes, outils et savoir faire améliorant l'opérationabilité des acteurs dans leur leadership, leurs prises de décisions, leur communication. Compte tenu de la composition des sessions nationales assurant la participation de professionnels d'excellents niveaux mais de parcours et d'univers très divers, les logiques et les outils d'innovation, de collaboration et d'intelligence agile et collective sont hautement favorisées et développées.</p><p>La pédagogie se décline selon les principes suivants :<ul style={{listStyle:'inside'}}><li> Les apports sont théoriques (essentiellement universitaires) et terrain (experts, personnes en responsabilité)</li><li> Des travaux en groupes de pairs : issus d'univers professionnels différents les participants vont s'enrichir par leur regards méthodes, problématiques différentes.</li><li> Toutes les rencontres se tiennent dans des formats en garantissant la qualité</li><li> Soutenance des travaux réalisés en groupe devant les autorités de tutelle, éventuelle publication de ces travaux</li></ul>Bien sur, la confidentialité des échanges est assurée ce qui donne aux intervenants et auditeurs la liberté requise pour traiter des questions de fond. </p><p>Il est a relever que dans tous les instituts la partie 'terrain', sous forme de voyages et déplacements 'in situ' est largement favorisée car ces rencontres et partages sont les très efficaces pour l'acquisition rapide d'éléments clés concrets outre l'effet réseau. Les apports théoriques servent notamment à soutenir cette démarche.</p><p>Les 'sessions nationales' ou 'régionales' font de 130H à 400H selon les instituts</p><br/>";

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  useEffect(() => {
    chargeText();
  }, []);

  async function chargeText() {
    try {
      const url = apiUrl + "/api/pedagogie/1/"
      const response = await axios.get(url);
      setTitle(response.data.titre);
      setSubTitle(response.data.sous_titre);
      setText(response.data.texte);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={ {  justifyContent: 'Right', alignItems: 'Right'} }>
      <Wrapper style= {{backgroundColor:'white'}}>
        <Title style={{fontFamily:'Lucida'}}>
          {title} <br/>
          <i> {subTitle} </i>
        </Title>
      </Wrapper>
      <br/>
      <div style={{ paddingLeft: '20%', paddingRight: '20%', paddingbottom: 20, textAlign: 'left', fontFamily: 'sans-serif', fontSize:'19px' }}>
        <div dangerouslySetInnerHTML={{__html: text}}></div>
        {/* <p>L'expérience IHE est conçue pour permettre :</p>
        <p>
          - l'acquisition de la matière nécessaire pour appréhender en profondeur les enjeux des domaines étudiés et les problématiques des acteurs.<br />
          - l'intégration de réflexes, outils et savoir faire améliorant l'opérationabilité des acteurs dans leur leadership, leurs prises de décisions, leur communication. 
          Compte tenu de la composition des sessions nationales assurant la participation de professionnels d'excellents niveaux mais de parcours et d'univers très divers, les logiques et les outils d'innovation, de collaboration et d'intelligence agile et collective sont hautement favorisées et développées.
        </p>
        <p>
          La pédagogie se décline selon les principes suivants :
          <ul style={{listStyle:'inside'}}>
            <li>
              les apports sont théoriques (essentiellement universitaires) et terrain (experts, personnes en responsabilité)
            </li>
            <li>
              des travaux en groupes de pairs : issus d'univers professionnels différents les participants vont s'enrichir par leur regards méthodes, problématiques différentes.
            </li>
            <li>
              toutes les rencontres se tiennent dans des formats en garantissant la qualité
            </li>
            <li>
              soutenance des travaux réalisés en groupe devant les autorités de tutelle, éventuelle publication de ces travaux
            </li>
          </ul>
          Bien sur, la confidentialité des échanges est assurée ce qui donne aux intervenants et auditeurs la liberté requise pour traiter des questions de fond.
        </p>
        <p>
          Il est a relever que dans tous les instituts la partie "terrain", sous forme de voyages et déplacements "in situ" est largement favorisée car ces rencontres et partages sont les très efficaces pour l'acquisition rapide d'éléments clés concrets outre l'effet réseau. Les apports théoriques servent notamment à soutenir cette démarche.
        </p>
        <p>
          Les "sessions nationales ou "régionales" font de 130H à 400H selon les instituts
        </p>
        <br/> */}
      </div>
    </div>
  );
}

export default Pedagogie;
