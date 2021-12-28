export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discoverWeekly:null,
  spotify:null,
  playlistId:null
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      console.log("set user action is triggered");
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      console.log("Token is set");
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      console.log("playlists are fetched");
      return {
        ...state,
        playlists: action.playlists,
      };
    
    case "SET_PLAYLIST_ID":
        console.log("playlist id is set")
        return {
            ...state,
            playlistId: action.playlistId,
          };


    case "SET_DISCOVER_WEEKLY":
        console.log("discover weekly is set");
        return{
            ...state,
            discoverWeekly:action.discoverWeekly,

        }
    case "SET_ITEM":
        console.log("item is set")
        return{
            ...state,
            item:action.item,

        }
    case "SET_PLAYING":
        console.log("song is played")
        return{
            ...state,
            playing:action.playing,

        }
        case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };



    default:
      return state;
  }
};

export default reducer;
