import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

import image from '../../images/curation_temp.jpg';

export default function CurationCard({ info, setCId }) {
  return (
    <Card>
      <CardActionArea onClick={() => setCId(info.id)}>
        {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            #{info.id} (노래 {info.count}곡)
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
