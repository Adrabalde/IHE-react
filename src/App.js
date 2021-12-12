import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//*import Home from './pages';
import ExperienceIHE from './pages/experience';
//*import SignUp from './pages/signup';
import Reseau from './pages/reseau';
import Pedagogie from './pages/pedagogie';
import Reseau2 from './pages/reseau2';
import Footer from './Components/Footer';
import Lesihes from './pages/lesihes';
import Profils from './pages/profils';


import 'bootstrap/dist/css/bootstrap.min.css';
import Formation from './pages/formation';


function App() {
return (
	<Router>
		<Navbar />
		<div style={styles.behindNav}> </div>
		<div style={styles.mainContainer}>
			
			<Switch>
			
				<Route path='/lesihes' component={Lesihes}/>
				<Route path='/experiencesihe' component={ExperienceIHE} />
				<Route path='/reseau' component={Reseau}  />
				<Route path='/formation' component={Formation} />
				<Route path='/reseau2' component={Reseau2} />
				<Route path='/pedagogie' component={Pedagogie} />
				<Route path='/reseau' component={Reseau} />
				<Route path='/profils' component={Profils} />
			</Switch>
		</div>
		<Footer/>
	</Router>
);
}

export default App;

const styles = {
	behindNav: {
		height: 300
	},
	mainContainer: {
		// border: '2px solid red',
	}
}
