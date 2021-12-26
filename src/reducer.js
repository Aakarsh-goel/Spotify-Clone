export const initialState = {
    user : null,
    playlists : [],
    playing: false,
    item:null,
    token:null
};

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            console.log("set user action is triggered")
            return {
                ...state,
                user:action.user
            }

        case 'SET_TOKEN':
            console.log("Token is set")
            return{
                ...state,
                token:action.token
            }
            
        default:
            return state;
    }

}

export default reducer;