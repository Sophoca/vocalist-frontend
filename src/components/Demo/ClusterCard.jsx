import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useState } from 'react';
import MusicList from 'components/Playlist/MusicList';

export default function ClusterCard({ checked, clusterInfo }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardActionArea onClick={() => setOpen(!open)}>
        {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            # 노래수
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`${checked.artist}의 ${checked.title} 좋아하시는구나?`}
          </Typography>
        </CardContent>
      </CardActionArea>
      {open && <MusicList list={clusterInfo} />}
    </Card>
  );
}
