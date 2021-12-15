export const initialState={
    user:null,
    playlists:[],
    playing:false,
    iteam:null,
    token:'',
    // token:"BQCH_TQcMxRKGcogNGJU6YveNMMm7nPqRP6mq5_tnHMtwno-9oAL0qkUjQF7baz9-YNPvKQ8frLI_4fGFWHiEsc7WsBXC3AOzuBkH1Sw5TSavJOPCWz1E7dD32ygZuD1OUqCi2lfXmaLX79jHOm7UcagDq9P-bpai9wYFtRT43gKq0_U",

};


const reducer=(state, action)=>{
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            };
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVERY_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
}
}
export default  reducer;