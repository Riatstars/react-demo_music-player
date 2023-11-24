import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Marquee from "react-fast-marquee";
import useMusicPlayer from '../hooks/useMusicPlayer';


function TrackList() {
  const {
    playTrack,
    isPlaying,
    currentTrackIndex,
    currentTrackName,
    trackList} = useMusicPlayer()
  return (
    <div>
      <Marquee play={isPlaying} style={{marginBottom: "2rem"}}>
        {currentTrackName}
      </Marquee>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        trackList?.map((track,index)=> (<ListItem key={track.name}>
          <ListItemAvatar onClick={()=>playTrack(index)}>
            <Avatar>
              {isPlaying&&currentTrackIndex===index?  <PauseIcon/> : <PlayArrowIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"center"}} primary={track.name} />
        </ListItem>
      ))
      }
      
      
    </List>
    </div>
  )
}

export default TrackList
