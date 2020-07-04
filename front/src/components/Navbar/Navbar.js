import React, { Component } from "react";
import classes from './Navbar.module.css'
import { Link } from "react-router-link";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-nav">
            <div className={classes.Navbar}>
                <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        
                    <NavItem eventKey="charts">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-line-chart"
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>Notifications</NavText>
                        </NavItem>
                       
                        
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-line-chart"
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>Statistics</NavText>
                           
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-line-chart"
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>History</NavText>
                           
                        </NavItem>

                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-line-chart"
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>Suggest a product</NavText>
                            
                        </NavItem>

                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-line-chart"
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>Contact us</NavText>
                            
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
            </div>
        );
    }
}
