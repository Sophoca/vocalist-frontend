import React, { useState } from 'react';
import { CurationApi } from '../../api';
import useAsync from '../../useAsync';
import AutoComplete from './AutoComplete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList({ curation_id, musicLists }) {
  async function fetchData(id) {
    const response = await CurationApi.getCuration(id);
    console.log('response', response);
    return response.data;
  }
  console.log('curationid', fetchData);
  const [state, refetch] = useAsync(() => fetchData(curation_id), [curation_id]);
  const { loading, data, error } = state;

  const [inputs, setInputs] = useState({ delList: [], addList: [] });

  const handleDelete = id => {
    inputs.delList.includes(id)
      ? setInputs({ ...inputs, delList: inputs.delList.filter(el => el !== id) })
      : setInputs({ ...inputs, delList: inputs.delList.concat(id) });
  };
  console.log('test', inputs);

  if (loading) return <div style={{ margin: 10, width: 33 + '%' }}>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  const extractID = data.body.map(el => el.id);
  const restMusicList = musicLists.filter(el => !extractID.includes(el.id));

  // console.log('test', musicLists, data.body, restMusicList);

  return (
    <div className="container">
      <h2>{`Modify #${curation_id} Curation`}</h2>
      <Box className="box" component="div">
        <div>
          <h3 style={{ margin: 0 }}>Delete Items</h3>
          <List dense>
            {data.body.map(el => (
              <ListItem
                key={el.id}
                sx={{ paddingTop: 0, paddingBottom: 0 }}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(el.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={el.title}
                  secondary={el.artist}
                  secondaryTypographyProps={
                    inputs.delList.includes(el.id) ? { color: 'red' } : null
                  }
                  sx={
                    inputs.delList.includes(el.id)
                      ? { secondary: 'red', color: 'red', textDecoration: 'line-through' }
                      : null
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <h3 style={{ margin: 0 }}>Add Items</h3>
          <AutoComplete
            musicLists={restMusicList}
            inputs={inputs}
            errors
            setInputs={setInputs}
          ></AutoComplete>
        </div>
        <Button variant="contained">Modify Curation</Button>
      </Box>
    </div>
  );
}
