import React from 'react';
import {
	Nav,
	NavMenu, Li
} from './NavbarElements';
import Burger from './burger';
import {NavLink} from 'react-router-dom';
import {MenuList} from './MenuList';

const Navbar = () => {
	
	const menuList = MenuList.map(({ url, title }, index) => {
    	return (
			<Li key={index}>
				<NavLink exact to={url} activeClassName="active">
				{title}
				</NavLink>
			</Li>
		);
  	});
	
	return (
		<Nav >
			
			<div style={styles.container}>
				<div style={styles.logoContainer}>
					<div style={styles.imgContainer}>
						<img src="./images/logo.webp" alt="Logo" />
					</div>
					<div style={styles.titleContainer}>
						<h2 style={styles.title}>Le réseau des Institus des Hautes Etudes</h2>
					</div>
				</div>
				<div style={styles.hrNav}>
					<hr style={styles.separator}/>
					<NavMenu style={styles.navmenu}>
						<ul style={{textalign:'center'}}>{menuList}</ul>
					</NavMenu>
				</div>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;

const styles = {
	container: {
		display: 'flex',
		paddingTop: 20,
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '90%',
	},
	logoContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 2,
		fontSize: 20,
		// border: '1px solid red',
	},
	imgContainer: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 50px',
		width: 'auto',
		height:'100%',
		// border:'1px solid chartreuse',
	},

	titleContainer: {
		height:'100%',
		paddingTop: 50,
		// border:'1px solid cyan',
	},
	title: {
		color: 'lightgrey',
		fontFamily: '"Times New Roman", Times, serif',
		fontSize:'20px'
		// border:'1px solid lightpink',
	},
	hrNav: {
		display: 'flex',
		flexDirection: 'column',
		// border: '3px solid blue',
	},
	separator: {
		color: '#FFFFFF',
		backgroundColor: '#FFFFFF',
		opacity: 1,
		height: 1.5,
	},
	navmenu: {
		display: 'flex',
		paddingTop: 30,
		paddingBottom: 30,
		// border: '1px solid orange',
	}
}