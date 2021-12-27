import './App.css';
import Login from './Login';
import { useState,useEffect,useContext } from 'react';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { DataLayerContext, useDataLayerValue, DataLayer } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
 
  const [{user,token},dispatch] = useContext(DataLayerContext) // use this to get data layer at evry time

  useEffect(() => {
      const hash = getTokenFromURL();
      const _token = hash.access_token;

      if(_token){
         
          dispatch({
            type:"SET_TOKEN",
            token:_token
          })
           // doubt why token didn't work here, I had to wrte _token
          
          spotify.setAccessToken(_token);
          spotify.getMe().then((user) => {
            
            dispatch({
              type:"SET_USER",
             // user : user 
             user                          
            })

            spotify.getUserPlaylists().then((playlists)=>{
              dispatch({
                type:"SET_PLAYLISTS",
                playlists                        
              })
            })
          })

      }
      console.log("dispatch test for user ----->",user);
      console.log("dispatch test for token ----->",token);
  }, [])

  return (
    <div className="App">
      
      {
        token ? <Player spotify={spotify}/>:<Login/>
        
      }
     
    </div>
  );
}

export default App;
