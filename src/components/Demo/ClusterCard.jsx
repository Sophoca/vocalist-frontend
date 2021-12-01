import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Card, CardContent, Collapse, Typography, CardActionArea, IconButton } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

import MusicList from 'components/Playlist/MusicList';

export default function ClusterCard({ checked, clusterInfo }) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: isMobile ? 'undefined' : 1,
        flexWrap: 'nowrap',
        flexShrink: 0
      }}
    >
      <CardActionArea onClick={() => setOpen(!open)}>
        {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
        <CardContent>
          {/* <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            # 노래수
          </Typography> */}
          <Typography gutterBottom variant="h6" component="div">
            {`${checked.artist}의 ${checked.title} 좋아하시는구나?`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Collapse in={open} sx={{ overflow: 'auto' }}>
        <MusicList list={clusterInfo} />
      </Collapse>
    </Card>
  );
}
