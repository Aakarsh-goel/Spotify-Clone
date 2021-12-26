import './App.css';
import Login from './Login';
import { useState,useEffect,useContext } from 'react';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { DataLayerContext, useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState(null); 
  const [user,dispatch] = useContext(DataLayerContext)

  useEffect(() => {
      const hash = getTokenFromURL();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){
          setToken(_token);
           // doubt why token didn't work here, I had to wrte _token
          
          spotify.setAccessToken(_token);
          spotify.getMe().then((user) => {
            console.log('test spotify api', user);
            dispatch({
              type:"SET_USER",
              user : user                           
            })
          })

      }
      console.log("dispatch test ----->",user);
  }, [])

  return (
    <div className="App">
      
      {
        token ? <Player/>:<Login/>
        
      }
     
    </div>
  );
}

export default App;
