import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';

export default function InputForm({ clist, musicLists }) {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    ctype: '',
    selectMusic: ''
  });

  const { title, description, ctype, selectMusic } = inputs;

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log('test', e.target);
  };

  const onReset = () => {
    setInputs({
      search: ''
    });
  };

  console.log('test', inputs);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '400px' },
        '& .MuiSelect-root': { width: '400px' },
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        border: '1px dashed grey',
        borderRadius: 5,
        padding: '20px'
      }}
    >
      <TextField name="title" label="Title" variant="standard" onChange={onChange} />
      <TextField
        name="description"
        label="Description"
        variant="standard"
        multiline
        maxRows={5}
        onChange={onChange}
      />
      {/* <p>search music</p>
      <input name="search" placeholder="search"></input> */}
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select name="ctype" value={ctype} label="Type" onChange={onChange}>
          <MenuItem value={0}>None</MenuItem>
          {clist.map(el => (
            <MenuItem value={el.id}>{el.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        multiple
        id="musicList"
        disableCloseOnSelect
        autoComplete
        onChange={(event, newValue) =>
          setInputs({ ...inputs, selectMusic: newValue.map(el => el.id) })
        }
        options={musicLists}
        getOptionLabel={option => `${option.title} - ${option.artist}`}
        renderInput={params => (
          <TextField {...params} variant="standard" label="Music List" placeholder="search" />
        )}
      />
      {/* <ComboBox list={ctype} name="curation type" /> */}
    </Box>
  );
}
