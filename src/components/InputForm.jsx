import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function InputForm({ clist, musicLists }) {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    ctype: '',
    search: ''
  });

  const { title, description, ctype, search } = inputs;

  const onChange = e => {
    const { value, name, ctype, search } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      search: ''
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        border: '1px dashed grey'
      }}
    >
      <div>
        <p>curation title</p>
        <input name="title" placeholder="title"></input>
        <p>curation description</p>
        <textarea name="description" placeholder="description"></textarea>
        <p>search music</p>
        <input name="search" placeholder="search"></input>
      </div>
      <div>
        <p>music list</p>
        <Autocomplete
          multiple
          id="tags-standard"
          disableCloseOnSelect
          autoComplete
          onChange={(event, newValue) => console.log('test', newValue)}
          options={musicLists}
          getOptionLabel={option => `${option.title} - ${option.artist}`}
          renderInput={params => (
            <TextField {...params} variant="standard" label="Music List" placeholder="search" />
          )}
          sx={{ width: 200 }}
        />
        {/* <ComboBox list={ctype} name="curation type" /> */}
      </div>
    </Box>
  );
}
