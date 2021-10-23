import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { ListItemAvatar } from '@mui/material';

export default function MusicList({ list }) {
  console.log(list);
  return (
    <List>
      {list.map(el => (
        <ListItem
          key={el.id}
          sx={{ paddingTop: 0, paddingBottom: 0 }}
          secondaryAction={
            <div className="flex">
              <IconButton aria-label="delete">
                <Favorite sx={{ color: el.isLike ? pink[500] : null }} />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          }
        >
          <ListItemAvatar>
            <ListItemText primary={el.number || '000000'} sx={{ width: 80, textAlign: 'center' }} />
          </ListItemAvatar>
          <ListItemText primary={el.title} secondary={el.artist} />
        </ListItem>
      ))}
    </List>
  );
}
