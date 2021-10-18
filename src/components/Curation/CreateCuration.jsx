import React, { useState, useEffect } from 'react';
import { CurationApi } from '../../api';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AutoComplete from './AutoComplete';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateCuration({ clist, musicLists, refetch }) {
  const initState = {
    title: '',
    content: '',
    ctype_id: 0,
    addList: []
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

  const validate = values => {
    const errors = {};
    Object.keys(values).map(el => {
      if (values[el] === initState[el] || values[el].length === 0) errors[el] = 'error';
    });
    return errors;
  };

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(inputs));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setErrors({});
  };

  useEffect(() => {
    const onSubmit = async values => {
      const response = await CurationApi.createCuration({
        ...values,
        music_id_list: values.addList.map(el => el.id)
      });
      if (response.data.status) {
        onReset();
        refetch();
      }
      return response;
    };

    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(inputs);
      }
      setSubmitting(false);
    }
  }, [errors]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Object.keys(errors).length !== 0}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert variant="filled" severity="error">
          Error Occured!
        </Alert>
      </Snackbar>
      <div className="container">
        <h2>Create Curation</h2>
        <Box className="box" component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            name="title"
            label="Title"
            variant="standard"
            value={inputs.title}
            error={errors.title}
            onChange={onChange}
          />
          <TextField
            name="content"
            label="Content"
            variant="standard"
            multiline
            maxRows={5}
            value={inputs.content}
            error={errors.content}
            onChange={onChange}
          />
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
          <AutoComplete
            musicLists={musicLists}
            inputs={inputs}
            errors={errors}
            setInputs={setInputs}
          />
          <Button variant="contained" type="submit" disabled={submitting}>
            Create Curation
          </Button>
          {/* <ComboBox list={ctype_id} name="curation type" /> */}
        </Box>
      </div>
    </>
  );
}
