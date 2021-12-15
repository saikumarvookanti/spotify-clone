import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function Header({spotify}) {
    const [{user,token},dispatch] =useDataLayerValue();
    const [logoutShow, setlogoutShow] = useState(false);

    const logOutHandler=()=>{
            setlogoutShow(!logoutShow);
    }
    const logoutClick=()=>{
        dispatch({
            type:'SET_TOKEN',
            token:null
        });
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input type="text"
                placeholder='Search for Artists, Songs, or podcasts' />

            </div>
            <div className='header_right'>
                <Avatar  src={user?.images[0]?.url} alt={user?.disaplay_name}/>
                <h4>{user?.display_name}</h4>
                {
                    !logoutShow ? <ArrowDropDownIcon onClick={logOutHandler}/> :
                    <div className='header_right_upArrow'><ArrowDropUpIcon onClick={logOutHandler}/>
                    <div className='header_logout'>
                        <h3>Profile</h3>
                        <h3 onClick={logoutClick}>Logout</h3>
                    </div>
                        
                    </div>
                    
                }
                
            </div>
        </div>
    )
}

export default Header;
