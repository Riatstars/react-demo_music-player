import React from 'react'
import LinearDeterminate from './ProgressBar' 
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Box, Button, ButtonGroup } from '@mui/material';
import useMusicPlayer from '../hooks/useMusicPlayer';




function Controller() {

  const {
    playTrack,
    togglePlay, 
    isPlaying,
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack} = useMusicPlayer()

    const buttons = [
      // <Button onClick={()=>playTrack(1)} key="previoous">track1</Button>,

      <Button onClick={()=>playPreviousTrack()} key="previoous"><SkipPreviousIcon/></Button>,
      <Button onClick={()=>togglePlay()} style={{display: isPlaying? "none": ""}}  key="play"><PlayArrowIcon/></Button>,
      <Button onClick={()=>togglePlay()} style={{display: !isPlaying? "none": ""}} key="pause"><PauseIcon/></Button>,
      <Button onClick={()=>playNextTrack()}  key="next"><SkipNextIcon/></Button>,
    ];
  return (
    <div>
      <LinearDeterminate/>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup style={{marginTop:"1rem"}} size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
    </div>
  )
}

export default Controller