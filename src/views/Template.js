// import React, { Component, useState } from 'react';
import React, { Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ColumnChartwithIndexlabel from "./overview/Column Chart with Indexlabel";
import SplineChart from "./line charts/Spline Chart";
import AreaChart from "./area charts/Area Chart";

const cities=["Casablanca","Nouaceur","Mohammadia","El_Jadida","Berrechid","Mediouna","Benslimane","Settat","Rabat","Sale","Skhirate-Temara","Kenitra","Sidi Kacem","Sidi-Slimane","Marrakech","Safi","Essaouira","El-Kelaa-des-Sraghna","Al-Haouz",
"Tanger-Assilah","MDiq-Fnideq","Tetouan","Ouezzane","Chefchaouen","Oued-Ed-Dahab","Inezgane-Ait-Melloul","Agadir-Ida-Ou-Tanane","Taroudannt","Tiznit","Chtouka-Ait-Baha","Tata","Fes","Meknes","Taounate","Taza","Sefrou","El-Hajeb",
"Laayoune","Tarfaya","Driouch","nador","Berkane","Guercif","Khenifra","Salah-Ben-Fquih","Azilal","Tinghir","Errachidia","Ouarzazate","Tan-Tan","Assa-Zag"];


class Template extends Component {
	
  render() {  
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">Covid 19</Navbar.Brand>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						<Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
								<ListGroup.Item>
									<a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Regions</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="overview">
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/0"} >Grand Casablanca-Settat </NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/1"}>Rabat - Salé-Kenitra</NavLink></ListGroup.Item>									
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/2"}>Souss - Massa </NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/3"}>Marrakech- Safi</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/4"}>Tanger -Tétouan- Al Hoceima</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to={"/chart-with-index-label/5"}>Fès - Meknès</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to={"/chart-with-index-label/6"}>Darâa-Tafilalet</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to={"/chart-with-index-label/7"}>Laâyoune - Sakia El Hamra</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to={"/chart-with-index-label/8"}>Dakhla-Oued Eddahab </NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to={"/chart-with-index-label/9"}>Oriental</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/10"}>Beni Mellal- Khénifra  </NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to={"/chart-with-index-label/11"}>Guelmim –Oued Noun </NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#lineCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Cities</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="lineCharts">
										<ListGroup.Item> <NavLink to="/spline-chart">Spline Chart</NavLink></ListGroup.Item>
										
										{cities.map((cities,i) => (
											i+=1,
											<ListGroup.Item> <NavLink to={"/spline-chart/"+i}>{cities}</NavLink></ListGroup.Item>
											
											
										))}
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>

								<ListGroup.Item>
									<a href="#areaCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Mise a jour des dossiers</span></a>
								</ListGroup.Item>

								
							</ListGroup>
						</Nav>
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									{/* <Route exact path="/" component={ColumnChart}/>AreaChart */}
									
									<Route exact path="/" component={AreaChart}/>

									<Route exact path="/chart-with-index-label/0" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/1" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/2" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/3" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/4" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/5" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/6" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/7" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/8" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/9" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/10" component={ColumnChartwithIndexlabel} />
									<Route exact path="/chart-with-index-label/11" component={ColumnChartwithIndexlabel} />

									<Route path="/spline-chart" component={SplineChart}/>

							
									
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;