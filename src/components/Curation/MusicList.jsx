import React from 'react';
import { CurationApi } from '../../api';
import useAsync from '../../useAsync';
import Box from '@mui/material/Box';

export default function MusicList({ curation_id }) {
  async function fetchData(id) {
    const response = await CurationApi.getCuration(id);
    console.log('response', response);
    return response.data;
  }
  console.log('curationid', fetchData);
  const [state, refetch] = useAsync(() => fetchData(curation_id), [curation_id]);
  const { loading, data, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Add Curation</h2>
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
          width: 500
        }}
      >
        {data.body.map((el, i) => (
          <div key={i}>{`${el.title}-${el.artist}`}</div>
        ))}
      </Box>
    </div>
  );
}
