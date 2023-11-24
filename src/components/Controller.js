import React from 'react'
import LinearDeterminate from './ProgressBar' 
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Box, Button, ButtonGroup } from '@mui/material';
const buttons = [
  <Button key="previoous"><SkipPreviousIcon/></Button>,
  <Button key="play"><PlayArrowIcon/></Button>,
  <Button key="pause"><PauseIcon/></Button>,
  <Button key="next"><SkipNextIcon/></Button>,
];

function Controller() {
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