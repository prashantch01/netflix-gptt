import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        tralierVideo : null,
        
    },
    reducers:{
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload

        },
        addPopoularMovies : (state , action) =>{
            state.popularMovies = action.payload
        },
        addTrailerVideo : (state , action) =>{
            state.tralierVideo = action.payload
        },
       
    }
})


export const {addNowPlayingMovies , addTrailerVideo , addPopoularMovies} = moviesSlice.actions

export default moviesSlice.reducer