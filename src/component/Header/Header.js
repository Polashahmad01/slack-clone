import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.css';
import { useStateValue } from '../StateProvider/StateProvider';

const Header = () => {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
            <Avatar 
                className="header__avatar"
                src={user?.photoURL}
                alt={user?.displayName}
            />
            <AccessTimeRoundedIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search On Slack" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;