import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { CurationApi } from 'api';
import AutoComplete from 'components/Curation/AutoComplete';

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

  const onChange = useCallback(
    e => {
      const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });
    },
    [inputs]
  );

  const onReset = () => {
    setInputs(initState);
  };

  const validate = useCallback(values => {
    const errors = {};
    Object.keys(values).map(el => {
      if (values[el] === initState[el] || values[el].length === 0) errors[el] = 'error';
    });
    return errors;
  }, []);

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(inputs));
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
  );
}
