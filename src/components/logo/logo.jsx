import React from "react";
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as ReactLogo} from "../../img/logo.svg";

const Logo = () => {
  const location = useLocation();
  const isFrontPage = location.pathname === `/`;
  const linkClass = `main-header__logo-wrapper`;
  const logoClass = `main-header__logo`;


  if (isFrontPage) {
    return (
      <a className={linkClass}>
        <ReactLogo className={logoClass} />
      </a>
    );
  }

  return (
    <Link to="/" className={linkClass}>
      <ReactLogo className={logoClass} />
    </Link>
  );

};

export default Logo;
