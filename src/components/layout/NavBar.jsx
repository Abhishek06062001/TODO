import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavItems from './NavItems'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            
            <Link to="/" className="navbar-brand">
            <h3>TodoApp</h3>
            </Link>
            <NavItems/>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state,"hello");
  };
  
  export default connect(mapStateToProps)(NavBar);
