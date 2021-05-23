import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const MainNavigation = (props) => {
  const {classForWrapper, classForMenu, links} = props;

  return (
    <nav className={`${classForWrapper} main-nav`}>
      <ul className={`main-nav__list ${classForMenu ? classForMenu : ``}`}>
        {links.map((elem, i) => (
          <li className="main-nav__item" key={`menu-${i}`}>
            <Link to={elem.link} className={`main-nav__link${elem.isActive ? ` main-nav__link--active` : ``}`}>
              {elem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MainNavigation.propTypes = {
  classForWrapper: PropTypes.string.isRequired,
  classForMenu: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  }))
};

export default MainNavigation;
