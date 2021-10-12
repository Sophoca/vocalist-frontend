import React from 'react';
import { CurationApi } from '../../api';
import useAsync from '../../useAsync';
import Box from '@mui/material/Box';

export default function ItemList({ curation_id }) {
  async function fetchData(id) {
    const response = await CurationApi.getCuration(id);
    console.log('response', response);
    return response.data;
  }
  console.log('curationid', fetchData);
  const [state, refetch] = useAsync(() => fetchData(curation_id), [curation_id]);
  const { loading, data, error } = state;

  if (loading) return <div style={{ margin: 10, width: 33 + '%' }}>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div className="container">
      <h2>Curation Items</h2>
      <Box className="box" component="div">
        {`#${curation_id}`}
        {data.body.map((el, i) => (
          <div key={i}>{`${el.title}-${el.artist}`}</div>
        ))}
      </Box>
    </div>
  );
}
