export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
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

    default:
      return state;
  }
};

export default reducer;
