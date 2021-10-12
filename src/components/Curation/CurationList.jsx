import React from 'react';
import Box from '@mui/material/Box';
import Curation from './Curation';

export default function CurationList({ clist, setCId }) {
  return (
    <div>
      <h2>Curation List</h2>
      <Box
        component="div"
        sx={{
          // '& .MuiTextField-root': { width: '400px' },
          // '& .MuiSelect-root': { width: '400px' },
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '1px dashed grey',
          borderRadius: 5,
          padding: '20px',
          width: 500,
          overflow: 'auto'
        }}
      >
        {clist.map(el => (
          <Curation info={el} setCId={setCId} />
        ))}
      </Box>
    </div>
  );
}
