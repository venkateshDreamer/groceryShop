import React from "react";
import HeaderNavBar from "components/common/HeaderNavBar";
import SideNavBar from "components/common/SideNavbar";

const Layout = props => {
    return (
        <>
            <div className='wrapper'>
                <SideNavBar />
                <div className="main">
                    <HeaderNavBar />
                    <main className="content">
                        {props.children}
                    </main>
                </div>
            </div>
           
    </>
  );
};

export default Layout;