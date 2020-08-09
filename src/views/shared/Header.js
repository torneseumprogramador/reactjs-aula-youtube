import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
              <link href="https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"></link>
              <link href="https://getbootstrap.com/docs/4.5/assets/css/docs.min.css" rel="stylesheet"></link>
              <Link className="navbar-brand mr-0 mr-md-2" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="d-block" viewBox="0 0 612 612" role="img" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg></Link>

              <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/clientes">Clientes</NavLink>
                  </li>
                </ul>
              </div>

              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                  <a className="nav-link pl-2 pr-1 mx-1 py-3 my-n2" href="https://github.com/torneseumprogramador" target="_blank" rel="noopener" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title><path fill="currentColor" fillRule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>
                </li>
              </ul>
            </header>
  }
}

export default Header;
