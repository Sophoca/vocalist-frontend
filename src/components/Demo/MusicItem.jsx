import { List, ListItem, ListItemText, ListItemAvatar, IconButton } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';

export default function MusicItem({ infos }) {
  return (
    <List>
      {infos.map(info => (
        <ListItem
          key={info.id}
          disablePadding
          secondaryAction={
            <div className="flex">
              <IconButton aria-label="favorite">
                <Favorite />
              </IconButton>
            </div>
          }
        >
          <ListItemAvatar>
            <ListItemText
              primary={info.number || '00000'}
              sx={{ width: 80, textAlign: 'center' }}
            />
          </ListItemAvatar>
          <ListItemText primary={info.title} secondary={info.artist} />
        </ListItem>
      ))}
    </List>
  );
}
