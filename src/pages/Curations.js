import React from 'react';
import { fetchDatas, CurationApi, MusicApi } from '../api';
import InputForm from '../components/Curation/InputForm';
import useAsync from '../useAsync';
import Box from '@mui/material/Box';

const AddCuration = () => {
  async function fetchData() {
    const responses = await Promise.all([
      CurationApi.getCtypeAll(),
      MusicApi.getAllMusic('part'),
      CurationApi.getAllCuration()
    ]);
    return responses.map(response => response.data);
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div
      style={{
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20
      }}
    >
      <InputForm clist={data[0].body} musicLists={data[1].body} refetch={refetch} />
      <div>
        <h2>Curation List</h2>
        <Box
          component="div"
          sx={{
            // '& .MuiTextField-root': { width: '400px' },
            // '& .MuiSelect-root': { width: '400px' },
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '1px dashed grey',
            borderRadius: 5,
            padding: '20px',
            width: 400
          }}
        >
          {data[2].body.map(el => (
            <div>{`#${el.id} ${el.title}`}</div>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default AddCuration;
