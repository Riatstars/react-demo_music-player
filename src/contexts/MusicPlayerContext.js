import React, {useState} from 'react'
import Track1 from "./track1.mp3"
import Track2 from "./track2.mp3"
import Track3 from "./track3.mp3"

const MusicPlayerContext=React.createContext()


const defaultValue = {
    audioPlayer: new Audio(),
    tracks:[
        {
            name:"Forest Lullaby - Lesfm",
            file: Track1
        },
        {
            name:"just Relax - Lesfm",
            file: Track2
        },
        {
            name:"Please Calm My Mind - Lesfm",
            file: Track3
        }

    ],
    currentTrackIndex: null,
    isPlaying: false
}

const MusicPlayerProvider = ({children})=>{
    const [state, setState] = useState(defaultValue)
    return (
        <MusicPlayerContext.Provider value={{state,setState}}>
            {children}
        </MusicPlayerContext.Provider>
    )
}


export {MusicPlayerContext, MusicPlayerProvider}