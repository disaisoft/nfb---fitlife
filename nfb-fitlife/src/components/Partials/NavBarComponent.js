import React, { Component } from 'react';
import logo from '../../images/logoDavid1.png';
import './styles/PartialStyle.css';


class NavBar extends Component {

    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-md navbar-light bg-light ">
                    <div class="container">
                        <a href="a" class="navbar-brand">
                            <img src={logo} weight="200px" height="150px" alt="logo" />
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#firstNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="firstNavbar">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-home"></i>ACERCA DE</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-envelope"></i>EMPEZAR</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-star"></i>EL NEGOCIO</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-cog"></i>TESTIMONIOS</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-user"></i>AUTOMATIZAR MI ROBOT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </header>
        );
    }
}

export default NavBar;

