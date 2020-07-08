import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import classes from "./Navbar.module.css";
import './Navbar.css';
import { withRouter } from "react-router-dom";


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            expanded: false
        }
	}
	


	//close Navbar
    closeMenu = () => {
        this.setState({
            expanded: false
        })
    }
    //open Navbar
    openMenu = (expanded)=> {
        this.setState({
            expanded: expanded
        })
	}
	


	render() {
        const { location, history } = this.props;
        
		return (
			<div className="container-nav">
				<div className={classes.Navbar}>
					<SideNav
					  onSelect={(selected) => {
                        const to = '/' + selected;
                        this.closeMenu();
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                    onToggle={this.openMenu}
                    expanded={this.state.expanded} 
					>
                   
						<SideNav.Toggle expanded={this.state.expanded} />
						<SideNav.Nav defaultSelected="home">
						
						<NavItem eventKey="home">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
                                
								<NavText><Link to="/home">Home</Link></NavText>
							</NavItem>

							<NavItem eventKey="notifications">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
                                
								<NavText><Link to="/notifications">Notifications</Link></NavText>
							</NavItem>
							
							

							<NavItem eventKey="statistics">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
								<NavText><Link to="/statistics">Statistics</Link></NavText>
							</NavItem>
							<NavItem eventKey="history">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
								<NavText><Link to="/history">History</Link></NavText>
							</NavItem>

							<NavItem eventKey="suggest-product">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
								<NavText><Link to="/suggest-product">Suggest a Product</Link></NavText>
							</NavItem>

							<NavItem eventKey="contact-us">
								<NavIcon>
									<i
										className="fa fa-fw fa-line-chart"
										style={{ fontSize: "1.75em" }}
									/>
								</NavIcon>
								<NavText><Link to="/contact-us">Contact Us</Link></NavText>
							</NavItem>
						</SideNav.Nav>
					</SideNav>
				</div>
			</div>
		);
	}
}
export default  withRouter(Navbar);