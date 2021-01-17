import React, { Component } from 'react';
import './Style/Style.css';
import logo from '../../Images/logo.png';
export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        return (
<section>
            <div className="container p-4">
                <nav className="navbar navbar-expand-lg navbar-dark ">

                    <div >
                    <a class="app-name" href="">  <img className="logo-image" src={logo} alt="application-logo" /> </a>
                </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleMenu}
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse" + show} id="navbarTogglerDemo01">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="#title">Home</a>
                            </li>
                            <div className="vert-bar">
                            </div>
                            <li className="nav-item">
                                <a className="nav-link " href="#features">About</a>
                            </li>
                            <div className="vert-bar">
                            </div>
                            <li className="nav-item">
                                <a className="nav-link " href="#testimonials">Gallery</a>
                            </li>
                            <div className="vert-bar">
                            </div>
                            <li className="nav-item">
                                <a className="nav-link " href="#footer">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </section>
        )
    }
}
