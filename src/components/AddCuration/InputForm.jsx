import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import { CurationApi } from '../../api';

export default function InputForm({ clist, musicLists }) {
  const initState = {
    title: '',
    content: '',
    ctype_id: 0,
    music_id_list: []
  };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = e => {
    const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs(initState);
  };

  const validate = ({ title, content, ctype_id, music_id_list }) => {
    const errors = {};
    if (title === '') errors.title = 'You must input title.';
    if (content === '') errors.content = 'You must input title.';
    if (ctype_id === 0) errors.ctype_id = 'You must input title.';
    if (music_id_list.length === 0) errors.music_id_list = 'You must input title.';

    return errors;
  };

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(inputs));
  };

  useEffect(() => {
    const onSubmit = async values => {
      const response = await CurationApi.createCuration(values);
      console.log('test onsubmit', response);
      alert(response.data.log);
      return response;
    };
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(inputs);
      }
      setSubmitting(false);
    }
  }, [errors]);

  console.log('test', inputs);

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
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
          maxWidth: 800,
          minWidth: 400
        }}
      >
        <TextField
          name="title"
          label="Title"
          variant="standard"
          error={errors.title || false}
          onChange={onChange}
        />
        <TextField
          name="content"
          label="content"
          variant="standard"
          multiline
          maxRows={5}
          error={errors.content}
          onChange={onChange}
        />
        {/* <p>search music</p>
      <input name="search" placeholder="search"></input> */}
        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select
            name="ctype_id"
            value={inputs.ctype_id}
            label="Type"
            error={errors.ctype_id}
            onChange={onChange}
          >
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
          key={option => option.id}
          onChange={(event, newValue) =>
            setInputs({ ...inputs, music_id_list: newValue.map(el => el.id) })
          }
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
        <Button variant="contained" type="submit" disabled={submitting}>
          Add Curation
        </Button>
        {/* <ComboBox list={ctype_id} name="curation type" /> */}
      </Box>
    </>
  );
}
