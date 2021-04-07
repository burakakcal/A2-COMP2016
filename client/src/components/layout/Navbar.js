import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='/login'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-lg'>Logout</span>
        </a>
      </li>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
    </ul>
  );

  const guestLinks = (
    <ul>
        <li>
            <Link to='/index'>Home</Link>
        </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-dark bg-light text-dark'>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ logout })(Navbar);
