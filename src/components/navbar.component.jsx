import React from 'react';
import { useState } from 'react';

const NavbarComponent = (props) => {
  const { title, changeTextColor } = props;
  const [mode, setMode] = useState('Light Mode');
  const [icon, setIcon] = useState(true);
  const [navbarClass, setNavbarClass] = useState('navbar navbar-expand-lg bg-light');
  const [bsTheme, setBsTheme] = useState('light')

  const changeMode = () => {
    // mode === 'Dark Mode' ? setMode('Light Mode') : setMode('Dark Mode');
    if (mode === 'Light Mode') {
      setMode('Dark Mode');
      setIcon(false);
      setNavbarClass('navbar fixed-top navbar-expand-lg bg-dark');
      setBsTheme('dark');
      document.body.style.backgroundColor = '#212121';
      changeTextColor();
    } else {
      setMode('Light Mode');
      setIcon(true);
      setNavbarClass('navbar fixed-top navbar-expand-lg bg-light');
      setBsTheme('light');
      document.body.style.backgroundColor = '#fff';
      changeTextColor();
    }
  }

  return (
    <nav className={ navbarClass } data-bs-theme={ bsTheme }>
      <div className="container p-2 my-auto">
        <a className="navbar-brand" href="/">{ title }</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">What I Do</a>
            </li>
            <li className="nav-item me-lg-4 me-sm-0 me-md-0">
              <a className="nav-link" href="/">Portofolio</a>
            </li>
            <li className="nav-item ms-4 ms-sm-0 ms-md-0">
              <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" onClick={ changeMode } />
              <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
                { icon ? ( <i className="bi bi-brightness-high-fill me-sm-1 me-md-1 me-2"></i> ) : ( <i className="bi bi-moon-fill me-sm-1 me-md-1 me-2"></i> ) }
                <b>{ mode }</b>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
