import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../UIElements/Backdrop';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerIsOpen, setdrawerIsOpen] = useState(false)
    const openDrawerHandler = () => setdrawerIsOpen(true)
    const closeDrawerHandler = () => setdrawerIsOpen(false)
    return (
        <React.Fragment>
        { drawerIsOpen && <Backdrop onClick={closeDrawerHandler} /> }
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">PhotoPlaces</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;