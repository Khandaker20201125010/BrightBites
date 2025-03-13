import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDashboard = () => {
    const links = [
        <ul className='menu'>
            <li><NavLink to='/dashboard/MyAppointment'>My Appointments</NavLink></li>
            <li><NavLink to='/dashboard/MyReviews'>My Reviews</NavLink></li>
            <li><NavLink to='/dashboard/MyHistory'>My History</NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
        </ul>
    ]
    return (
        <div>
            {links}
        </div>
    );
};

export default UserDashboard;