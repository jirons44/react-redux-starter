import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

// stateless component

const Header = ({loading}) => {
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/leaders" activeClassName="active">Leaders</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
          {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
      <div className="page-header">
        <h1>Allstate Hierarchy and Alignment Builder</h1>
    </div>
    </div>

  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
