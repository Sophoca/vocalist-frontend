import React, { useState, useEffect } from 'react';
import { CurationApi } from '../../api';
import useAsync from '../../useAsync';
import AutoComplete from './AutoComplete';
import { Button, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList({ curation_id, musicLists }) {
  async function fetchData(id) {
    if (id) {
      const response = await CurationApi.getCuration(id);
      return response.data;
    }
    return null;
  }
  const [state, refetch] = useAsync(() => fetchData(curation_id), [curation_id]);
  const { loading, data, error } = state;

  const [inputs, setInputs] = useState({ delList: [], addList: [] });
  useEffect(() => {
    setInputs({ delList: [], addList: [] });
  }, [curation_id]);

  const handleDelete = id => {
    inputs.delList.includes(id)
      ? setInputs({ ...inputs, delList: inputs.delList.filter(el => el !== id) })
      : setInputs({ ...inputs, delList: inputs.delList.concat(id) });
  };

  const handleSubmit = () => {
    async function modifyData() {
      const response = await CurationApi.modifyCurationItems(
        curation_id,
        inputs.addList.map(el => el.id),
        inputs.delList
      );
      if (response.status) {
        refetch();
        setInputs({ delList: [], addList: [] });
      }
      return response.data;
    }
    modifyData();
    console.log(
      curation_id,
      inputs.addList.map(el => el.id),
      inputs.delList
    );
  };

  if (loading) return <div style={{ margin: 10, width: 33 + '%' }}>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data)
    return (
      <div className="container">
        <h2>Select Curation</h2>
      </div>
    );

  const extractID = data.body ? data.body.map(el => el.id) : [];
  const restMusicList = musicLists.filter(el => !extractID.includes(el.id));

  return (
    <div className="container">
      <h2>{`Modify #${curation_id} Curation`}</h2>
      <Box className="box" component="div" style={{ flexDirection: 'column' }}>
        <Box className="box" component="div" style={{ flexDirection: 'column' }}>
          <h3 style={{ margin: 0 }}>Add Items</h3>
          <AutoComplete
            musicLists={restMusicList}
            inputs={inputs}
            errors
            setInputs={setInputs}
          ></AutoComplete>
        </Box>
        <Box className="box" component="div">
          <h3 style={{ margin: 0 }}>Delete Items</h3>
          <List>
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
        </Box>
        <Button
          variant="contained"
          disabled={Object.values(inputs).reduce((acc, cur) => acc + cur.length, 0) === 0}
          onClick={handleSubmit}
        >
          Modify Curation
        </Button>
      </Box>
    </div>
  );
}
