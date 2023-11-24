import { useContext, useEffect, useState } from 'react'
import {MusicPlayerContext} from "../contexts/MusicPlayerContext"



function useMusicPlayer() {

    const {state,setState}=useContext(MusicPlayerContext)
    
    function playTrack (index) {
        if (index === state.currentTrackIndex){
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
        console.log(state.audioPlayer)
        console.log(state.audioPlayer.currentTime)
        console.log(state.audioPlayer.duration)
        
    }
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
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          return Math.min(Math.ceil(state.audioPlayer.currentTime/state.audioPlayer.duration*100), 100)
        });
      }, 500);
    
      return () => {
        clearInterval(timer);
      }
    }, [ state.audioPlayer.currentTime,state.audioPlayer.duration])
    


  return {
    playTrack,
    togglePlay,
    currentTrackName:
        state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].name,
    trackDuration:state.audioPlayer.duration ,
    currentProgress: state.audioPlayer.currentTime,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    progress,
    playNextTrack
  }

}

export default useMusicPlayer