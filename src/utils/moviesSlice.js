import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        tralierVideo : null
    },
    reducers:{
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload

        },
        addTrailerVideo : (state , action) =>{
            state.tralierVideo = action.payload
        }
    }
})


export const {addNowPlayingMovies , addTrailerVideo} = moviesSlice.actions

export default moviesSlice.reducer