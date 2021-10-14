import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function CreateCuration({ musicLists, inputs, errors, setInputs }) {
  return (
    <Autocomplete
      multiple
      id="musicList"
      size="small"
      disableCloseOnSelect
      autoComplete
      onChange={(event, newValue) => setInputs({ ...inputs, music_id_list: newValue })}
      value={inputs.music_id_list}
      options={musicLists}
      getOptionLabel={option => `${option.title} - ${option.artist}`}
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          label="Music List"
          error={errors.music_id_list}
          placeholder="search"
        />
      )}
    />
  );
}
