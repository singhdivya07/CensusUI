import React, { Component } from 'react';
import './Style/NavigationStyle.css';
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
                <div className="Navigation"></div>
                <div className="container p-4">
                {/* <div className="container"> */}

                    <nav className="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">

                        {/* <div class="brand"><a class="navbar-brand  " href=""><span aria-hidden="true"><i class="fas fa-paw fa-5x"></i></span> tindog </a></div> --> */}
                        {/* <div >
                            <a class="app-name" href="">  <img className="logo-image" src={logo} alt="application-logo" /> </a>
                        </div> */}

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

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item active">
                                    <a className="nav-link " href="#title"><i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span></a>
                                </li>
                                {/* <div className="vert-bar">
                                </div> */}
                                <li className="nav-item">
                                    <a className="nav-link " href="#features"><i class="fas fa-users"></i>About</a>
                                </li>
                                {/* <div className="vert-bar">
                                </div> */}
                                <li className="nav-item">
                                    <a className="nav-link " href="#testimonials"><i class="fas fa-camera"></i>Gallery</a>
                                </li>
                                {/* <div className="vert-bar">
                                </div> */}
                                <li className="nav-item">
                                    <a className="nav-link " href="#footer"><i class="fas fa-phone-alt"></i>Contact Us</a>
                                </li>
                            </ul>
                            {/* <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form> */}

                        </div>
                        </div>
                        
                    </nav>
                </div>
            </section>
        )
    }
}