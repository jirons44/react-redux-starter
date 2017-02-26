import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

// stateless component

const Header = () => {
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/leaders" activeClassName="active">Leaders</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </nav>
      <div className="jumbotron">
        <h1>Leader to Agent alignment tool</h1>
    </div>
    </div>

  );
};

export default Header;
