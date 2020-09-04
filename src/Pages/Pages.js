import React from "react";
import {faAngleRight, faSearch, faSearchDollar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import s from './Pages.module.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    FormInput,
    Collapse,
    Button, Badge,
} from "shards-react";
import Main from "./Main/Main";
import Details from "./Details/Details";

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapseOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <Router>
                <Navbar type="dark" expand="md" className={s.Nav}>
                    <NavbarBrand>Dashboard</NavbarBrand>
                    <NavbarToggler className={s.NavbarToggler} onClick={this.toggleNavbar}/>

                    <Collapse open={this.state.collapseOpen} navbar>
                        <Nav navbar>
                            <NavItem className={s.NavItem}>
                                <Link to={'/main'} className={s.fix}>
                                    <NavLink>
                                        <Button outline pill theme={"warning"} onClick={this.state.collapseOpen ? this.toggleNavbar : null}>
                                            Головна
                                        </Button>
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem className={s.NavItem}>
                                <Link to={'/details'} className={s.fix}>
                                    <NavLink>
                                        <Button outline pill theme={"warning"} onClick={this.state.collapseOpen ? this.toggleNavbar : null}>
                                            Деталі
                                        </Button>
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>

                        <Nav navbar className="ml-auto">
                            <InputGroup size="md" seamless>
                                <FormInput className={s.FormInput} placeholder="Шукати..."/>
                                <InputGroupAddon type={"append"}>
                                    <Button theme={"warning"}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path={"/main"}>
                        <Main/>
                    </Route>
                    <Route path={"/details"}>
                        <Details/>
                    </Route>
                </Switch>
                <footer className={s.footer}>@Copyright 2020</footer>
            </Router>
        );
    }
}

export default Pages
