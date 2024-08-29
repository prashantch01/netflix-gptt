import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upCommingMovies : null,
        tralierVideo : null,
        
    },
    reducers:{
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload

        },
        addPopoularMovies : (state , action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state , action) =>{
            state.topRatedMovies = action.payload
        },
        addUpCommingMovies : (state , action) =>{
            state.upCommingMovies = action.payload
        },
        addTrailerVideo : (state , action) =>{
            state.tralierVideo = action.payload
        },
       
    }
})


export const {addNowPlayingMovies , addTrailerVideo , addPopoularMovies , addTopRatedMovies , addUpCommingMovies} = moviesSlice.actions

export default moviesSlice.reducer