import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Divider } from '@mui/material';

export default function BugCard({ info }) {
  return (
    <Card>
      {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {info.content}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
          작성자: {info.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          email: {info.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
