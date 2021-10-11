import React from 'react';
import Box from '@mui/material/Box';

export default function CurationList({ clist }) {
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
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '1px dashed grey',
          borderRadius: 5,
          padding: '20px',
          width: 500
        }}
      >
        {clist.map(el => (
          <div>{`#${el.id} ${el.title}`}</div>
        ))}
      </Box>
    </div>
  );
}
