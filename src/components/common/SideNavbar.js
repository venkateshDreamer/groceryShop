import React, { Component, useState,useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/fandashtic-logo-full.svg';
import Context from "store/context";
const SideNavbar = () => {
    const [sideMenu, setSideMenu] = useState(false);
    const { state, dispatch } = useContext(Context);
    const sideMenuBtn = () => {
        setSideMenu(!sideMenu)
    }
    return (
        <>
            <nav id="sidebar" className={state.isSideNavMenu ? "sidebar" : "sidebar toggled"}>
                <div className="sidebar-content ">
                    <Link to="/dashboard" className="sidebar-brand" >
                        <img src={logo} />
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Main
                        </li>
                        <li className="sidebar-item">
                            <Link to="/dashboard" className="sidebar-link">
                                <i className="align-middle fas fa-fw fa-sliders-h" /> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to="/inventory" className="sidebar-link">
                                <i className="align-middle fas fa-fw fa-file-alt" /> <span className="align-middle">Inventory</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/transction" className="sidebar-link">
                                <i className="align-middle fas fa-fw fa-truck" /> <span className="align-middle">Transction</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="#" data-toggle="collapse" onClick={() => sideMenuBtn()} className={sideMenu ? "sidebar-link" : "sidebar-link collapsed"} aria-expanded={sideMenu}>
                                <i className="align-middle  fas fa-fw fa-cube " /> <span className="align-middle">Master</span>
                            </Link>
                            <ul className={sideMenu ? "sidebar-dropdown list-unstyled show " : "sidebar-dropdown list-unstyled collapse "} data-parent="#sidebar">
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/brand">
                                    <i className="align-middle  fas fa-fw fa-leaf" /> <span className="align-middle">Brand</span>
                                </Link>
                                </li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/category">
                                    <i className="align-middle  fas fa-fw fa-object-group" />
                                    <span className="align-middle">Category</span>
                                </Link></li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/user">
                                    <i className="align-middle  fas fa-fw fa-user-alt" />
                                    <span className="align-middle">User</span>

                                </Link>
                                </li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/product">
                                    <i className="align-middle  fas fa-fw fa-cubes" />
                                    <span className="align-middle">Product</span>
                                </Link>
                                </li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/options">
                                    <i className="align-middle  fas fa-fw fa-copy" />
                                    <span className="align-middle">Options</span>
                                </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default SideNavbar
