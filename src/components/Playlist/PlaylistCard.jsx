import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PlaylistApi } from '../../api';
import useAsync from '../../useAsync';
import MusicList from './MusicList';

export default function PlaylistCard({ info, setId, pId }) {
  async function fetchData(id) {
    if (id) {
      const response = await PlaylistApi.getPlaylistItem(id);
      return response.data;
    }
    return null;
  }
  const [state, refetch] = useAsync(() => fetchData(info.id), []);
  const { loading, data, error } = state;
  return (
    <Card>
      <CardActionArea onClick={() => setId(info.id)}>
        {/* <CardMedia component="img" height="140" image={image} alt="curation cover img" /> */}
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            #{info.id} (노래 {info.count}곡)
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {pId === info.id && data && <MusicList list={data.body} />}
    </Card>
  );
}
