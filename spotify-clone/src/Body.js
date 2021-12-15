import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
    const [{discover_weekly,playlistID},dispatch]=useDataLayerValue();

    const playSong=(id)=>{
        console.log(id);
        spotify.play({uris:[`spotify:track:${id}`]}).then((res)=>{
            spotify.getMyCurrentPlayingTrack().then((track)=>{
                dispatch({
                    type:'SET_ITEM',
                    item:track.item,
                });

                dispatch({
                    type:'SET_PLAYING',
                    playing:true,
                });
            });
        });
    }
    
    const playPlaylist=()=>{
        spotify.play({context_uri:`spotify:playlist:${playlistID}`}).then((res)=>{
            console.log(res);
            spotify.getMyCurrentPlayingTrack().then((track)=>{
                dispatch({
                    type:'SET_ITEM',
                    item:track.item
                });
                dispatch({
                    type:'SET_PLAYING',
                    playing:true,
                });
            });
        });
    };


    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body_info'>
                <img src={discover_weekly?.images[0].url} 
                alt="" />
                <div className='body_infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
                </div>

                <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle' onClick={playPlaylist} />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item=>
                    <SongRow track={item.track} playSong={playSong} />
                    )}

                </div>
                </div>
    )
}

export default Body;

