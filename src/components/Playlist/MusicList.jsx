import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Favorite from '@mui/icons-material/Favorite';

export default function MusicList({ list }) {
  return (
    <List>
      {list.map(el => (
        <ListItem
          key={el.id}
          sx={{ paddingTop: 0, paddingBottom: 0 }}
          secondaryAction={
            <div className="flex">
              <IconButton aria-label="delete">
                <Favorite />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          }
        >
          <ListItemText primary={el.title} secondary={el.artist} />
        </ListItem>
      ))}
    </List>
  );
}
