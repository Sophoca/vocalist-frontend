import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
export default function InputForm() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    search: ''
  });

  const { title, description, ctype, search } = inputs;

  const onChange = e => {
    const { value, name, search } = e.target; // 우선 e.target 에서 name 과 value 를 추출
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
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <p>curation title</p>
        <input name="title" placeholder="title"></input>
        <p>curation description</p>
        <textarea
          name="description"
          placeholder="description"
          style={{ ...fontStyle, width: 400, height: 150, resize: 'none' }}
        ></textarea>
        <p>search music</p>
        <input name="search" placeholder="search"></input>
      </div>
      <div>
        <p>curation list</p>
        <ComboBox list={ctype} name="curation type" />
      </div>
    </Box>
  );
}
