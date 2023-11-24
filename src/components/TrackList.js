import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Marquee from "react-fast-marquee";

function TrackList() {
  return (
    <div>
      <Marquee>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PlayArrowIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{textAlign:"center"}} primary="Add Track Name Here" />
      </ListItem>
      
    </List>
    </div>
  )
}

export default TrackList
