import React from 'react'
import { Navbar, Sidebar, Footer } from './index';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js'
import { Routing } from '../../routes/index';
import { Routes, Route, Navigate } from 'react-router-dom';

const MasterLayout = () => {
  return (
    <div className='sb-nav-fixed'>
        <Navbar />
        <div id="layoutSidenav">
             
            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>
                    <Routes>
                        {Routing.map((route, index) => {
                            return(
                                route.component && (
                                    <Route key={index} path={route.path} exact={route.exact} name={route.name} render={(props) => {
                                        <route.component {...props} />
                                    }} />
                                )
                            )
                        })}
                        <Navigate from="admin" to="/admin/dashboard" />
                    </Routes>
                </main>

                <Footer />
            </div>
        </div>
    </div>
  )
}

export default MasterLayout