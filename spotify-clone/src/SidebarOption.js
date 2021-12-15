import React from 'react';
import { useDataLayerValue } from './DataLayer';
import "./SidebarOption.css";

function SidebarOption({title,Icon,playId,spotify}) {
    const [{playlistID},dispatch]=useDataLayerValue();
    const selectPlaylistHandler=()=>{
        playId && dispatch({
            type:'SET_PLAYLISTID',
            playlistID:playId
        });
        playId && spotify.getPlaylist(playId).then(response=>{
            dispatch({
              type:"SET_DISCOVERY_WEEKLY",
              discover_weekly:response,
            });
          })
    }
    return (
        <div className='sidebarOption' onClick={selectPlaylistHandler}>
        {Icon && <Icon className="sidebarOption_Icon" /> }
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;        