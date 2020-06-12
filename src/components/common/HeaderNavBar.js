import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom'
import Auth from 'config/auth'
const HeaderNavBar = () => {
    const [topMenu, setTopMenu] = useState(false);
    const topMenuBtn = () => {
        setTopMenu(!topMenu)
    }
    const signOut = () => {
        Auth.signout();
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white">
                <Link to="" className="sidebar-toggle d-flex mr-2">
                    <i className="hamburger align-self-center" />
                </Link>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle d-none d-sm-inline-block" to="#" onClick={() => topMenuBtn()} data-toggle="dropdown">
                                <i className="align-middle" data-feather="users" /> {' '}
                                <span className="align-middle">Admin</span>
                            </Link>
                            <div className={topMenu ? "dropdown-menu dropdown-menu-right show":"dropdown-menu dropdown-menu-right"}>
                                <Link className="dropdown-item" to="#"><i className="align-middle mr-1" data-feather="user" /> Change Password</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#" onClick ={()=> signOut()}>Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default HeaderNavBar
