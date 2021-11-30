import List from '@mui/material/List';
import MusicItem from './MusicItem';

export default function MusicList({ list }) {
  console.log(list);
  return (
    <List>
      {list.map(el => (
        <MusicItem key={el.id} info={el} />
      ))}
    </List>
  );
}
