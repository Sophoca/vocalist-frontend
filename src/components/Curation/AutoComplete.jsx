import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AutoComplete({ musicLists, inputs, errors, setInputs }) {
  return (
    <Autocomplete
      multiple
      id="musicList"
      size="small"
      disableCloseOnSelect
      autoComplete
      onChange={(event, newValue) => setInputs({ ...inputs, addList: newValue })}
      value={inputs.addList}
      options={musicLists}
      getOptionLabel={option => `${option.title} - ${option.artist}`}
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          label="Music List"
          error={errors.addList}
          placeholder="search"
        />
      )}
    />
  );
}
