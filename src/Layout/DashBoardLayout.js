import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <li><Link to='/dashboard'>My Bookings</Link></li>
                                <li><Link to='/dashboard/'>All Users</Link></li>
                                <li><Link to='/dashboard/'>My Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;