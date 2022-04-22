
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: ""
    // token: "BQDuxfaTmIhr-Cr0z_fbexCDblfk8_KGZw-u7UwEgsVounIcx-pZjb1t3sHeCMEHNErL6JYYH1hk7G-iXqaBZO4RR8JNjJ3VhycIUL7sGnFCzPibRO0R7sIlLtk1Q8yEr_412e4uJ4LQ8nNy1XkB9XmyZxiaolJBLlBDoKlKz8apPJmKvb5y"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER" :
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN" :
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS" :
            return {
                ...state,
                playlists: action.playlists
            }    
        case "SET_DISCOVER_WEEKLY" :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer