import { ListItem, ListItemText, ListItemAvatar, IconButton } from '@mui/material';

export default function MusicItem({ info }) {
  return (
    <ListItem disablePadding>
      <ListItemAvatar>
        <ListItemText primary={info.number || '000000'} sx={{ width: 80, textAlign: 'center' }} />
      </ListItemAvatar>
      <ListItemText primary={info.title} secondary={info.artist} />
    </ListItem>
  );
}
