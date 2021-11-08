import { ListItem, ListItemText, ListItemAvatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Favorite from '@mui/icons-material/Favorite';

export default function MusicItem({ info }) {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <div className="flex">
          <IconButton aria-label="favorite">
            <Favorite sx={{ color: info.islike ? '#e91e63' : null }} />
            {console.log(info)}
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      }
    >
      <ListItemAvatar>
        <ListItemText primary={info.number || '000000'} sx={{ width: 80, textAlign: 'center' }} />
      </ListItemAvatar>
      <ListItemText primary={info.title} secondary={info.artist} />
    </ListItem>
  );
}
