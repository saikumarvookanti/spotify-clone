import './App.css';
import Login from './Login';
import { useEffect ,useState } from 'react';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi();

function App() {
  const [{user, token ,playlistID},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash =getTokenFromResponse();
    window.location.hash="";
    const _token=hash.access_token;
    console.log("app file useEffect",playlistID);

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user:user
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });

      spotify.getPlaylist(playlistID).then(response=>{
        dispatch({
          type:"SET_DISCOVERY_WEEKLY",
          discover_weekly:response,
        });
      })
      });
    }

  }, [playlistID])
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> 
      : <Login />
    }
      
    </div>
  );
}

export default App;
