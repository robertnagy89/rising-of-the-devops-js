import React, { Component } from 'react';
import logo from '../images/bitfit_logo.png';
import logoHover from '../images/bitfit_logo_hover.png';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
        hover: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container-fluid">
                    <div >
                        <a className="navbar-brand" href="/" asp-area="" asp-controller="Home" asp-action="Index"><img src={this.state.hovered ? logoHover : logo } alt="BitFit" width="180px" onMouseOut={() => this.setState({ hovered: false })}
                            onMouseOver={() => this.setState({ hovered: true })} /></a>
                        
                    </div>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <div className="nav-card">
                                    <a className="nav-link text-dark" href="/recipes" asp-area="" asp-controller="Recipe" asp-action="Recipes">Recipes</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-card">
                                    <a className="nav-link text-dark" href="/foods" asp-area="" asp-controller="Foods" asp-action="Index">Foods</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-card">
                                    <a className="nav-link text-dark" href="/dashboard" asp-area="" asp-controller="Home" asp-action="Index">Dashboard</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-card">
                                    <a className="nav-link text-dark" href="/articles" asp-area="" asp-controller="Home" asp-action="Index">Articles</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-card">
                                    <a className="nav-link text-dark" href="/registration" asp-area="" asp-controller="Home" asp-action="Index">Registration</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </header>
    );
  }
}

