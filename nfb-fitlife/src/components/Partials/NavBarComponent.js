import React, { Component } from 'react';
import logo from '../../images/logo.jpg';
class NavBar extends Component {

    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-md navbar-light bg-light">
                    <div class="container">
                        <a href="a" class="navbar-brand">
                            <img src={logo} weight="50px" height="80px" alt="logo" />
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#firstNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="firstNavbar">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-home"></i>INICIO</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-envelope"></i>ACERCA DE</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-star"></i>MENSAJES</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-cog"></i>BLOG</a></li>
                                <li class="nav-item"><a class="nav-link" href="a"><i class="fa fa-fw fa-user"></i>MI CUENTA</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </header>
        );
    }
}

export default NavBar;