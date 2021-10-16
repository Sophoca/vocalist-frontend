import React, { useState } from 'react';
import { CurationApi } from '../../api';
import useAsync from '../../useAsync';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList({ curation_id }) {
  async function fetchData(id) {
    const response = await CurationApi.getCuration(id);
    console.log('response', response);
    return response.data;
  }
  console.log('curationid', fetchData);
  const [state, refetch] = useAsync(() => fetchData(curation_id), [curation_id]);
  const { loading, data, error } = state;

  const [delList, setDelList] = useState([]);
  const [addList, setAddList] = useState([]);

  const handleDelete = id => {
    delList.includes(id)
      ? setDelList(delList.filter(el => el !== id))
      : setDelList(delList.concat(id));
  };
  console.log('test', delList);

  if (loading) return <div style={{ margin: 10, width: 33 + '%' }}>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;
  // console.log('test', state);

  return (
    <div className="container">
      <h2>Curation Items</h2>
      <Box className="box" component="div">
        {`#${curation_id}`}
        <List dense>
          {data.body.map(el => (
            <ListItem
              key={el.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(el.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={el.title}
                secondary={el.artist}
                secondaryTypographyProps={delList.includes(el.id) ? { color: 'red' } : null}
                sx={
                  delList.includes(el.id)
                    ? { secondary: 'red', color: 'red', textDecoration: 'line-through' }
                    : null
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
