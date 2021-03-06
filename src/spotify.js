export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID = "570f20945a36410f9be57ceb8b423381";


const scopes = [
  "user-read-currently-playing",
  "streaming", 
  "user-read-email", 
  "user-read-private",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1])
        return initial
    },{})

}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
