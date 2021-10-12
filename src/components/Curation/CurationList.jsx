import React from 'react';
import Box from '@mui/material/Box';
import Curation from './Curation';

export default function CurationList({ clist, setCId }) {
  return (
    <div className="container">
      <h2>Curation List</h2>
      <Box className="box" component="div">
        {clist.map(el => (
          <Curation info={el} setCId={setCId} />
        ))}
      </Box>
    </div>
  );
}
