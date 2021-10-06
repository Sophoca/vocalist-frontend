import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ list, name }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={list}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label={name} />}
    />
  );
}
