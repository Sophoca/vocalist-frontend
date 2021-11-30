import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { MusicApi } from 'api';
import { useState } from 'react';

export default function ClusterCard({ clusterId }) {
  const cId = clusterId.split(',');
  async function fetchData() {
    try {
      const responses = await Promise.all(cId.map(el => MusicApi.getCluster(el)));
      return responses.map(response => response.data);
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  const [state, refetch] = useAsync(fetchData(), []);
  const { loading, data, error } = state;
  const [open, setOpen] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;
  return (
    // <Card>
    //   <CardActionArea onClick={}>
    //     {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
    //     <CardContent>
    //       <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
    //         #{info.id} (노래 {info.count}곡)
    //       </Typography>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {info.title}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   {pId === info.id && data && <MusicList list={data.body} />}
    // </Card>
    <div>ClusterCard</div>
  );
}
