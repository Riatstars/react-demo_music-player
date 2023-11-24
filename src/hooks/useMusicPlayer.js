import React from 'react'
import { useContext } from 'react'
import {MusicPlayerContext} from "../contexts/MusicPlayerContext"



function useMusicPlayer() {

    const {state,setState}=useContext(MusicPlayerContext)

    function playTrack (index) {
        if (index === state.currentTrackIndex){
            console.log("clicked!")
            togglePlay()

        }else{
            state.audioPlayer.pause();
            state.audioPlayer = new Audio (state.tracks[index].file)
            state.audioPlayer.play()
            setState((state)=>({
                ...state,
                currentTrackIndex:index,
                isPlaying:true
            }))
        }
        console.log(
            state.currentTrackIndex!== null && state.tracks[state.currentTrackIndex].name
        )

        function togglePlay(){
            if (state.isPlaying){
                state.audioPlayer.pause()
            }else{
                state.audioPlayer.play()
            }
            setState((state)=>({...state,isPlaying: !state.isPlaying}))
        }
        function playPreviousTrack(){
            const newIndex = (((state.currentTrackIndex + -1)% state.tracks.length)+state.tracks.length)%state.tracks.length
            playTrack(newIndex)
        }
        function playNextTrack(){
            const newIndex = (state.currentTrackIndex+1)%state.tracks.length
            playTrack(newIndex)
        }
    }


  return {
    playTrack,
    togglePlay,
    currentTrackName:
        state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack
  }
}

export default useMusicPlayer