import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from '../../images/curation_temp.jpg';

export default function Curation({ info }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="curation cover img" />
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            #{info.id}
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