import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, InputLabel } from '@mui/material';

import { BugReportApi } from 'api';

import axios from 'axios';

export default function BugReport() {
  const user_id = 1;
  const initState = {
    user_id: user_id,
    title: '',
    content: '',
    email: ''
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
      if (values[el].length === 0) errors[el] = 'error';
    });
    return errors;
  };

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(inputs));
  };

  useEffect(() => {
    const onSubmit = async () => {
      try {
        const response = await BugReportApi.post(inputs);
        if (response.data.status) {
          onReset();
        }
        console.log(response);
        return response;
      } catch (err) {
        console.log(err);
      }
    };

    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(inputs);
      }
      setSubmitting(false);
    }
  }, [errors]);
  console.log(inputs, errors);

  return (
    <div>
      <h2>Bug Reporting</h2>
      <Box className="box" component="div" onSubmit={handleSubmit} noValidate>
        <TextField
          name="email"
          label="email"
          value={inputs.email}
          error={errors.email}
          onChange={onChange}
        />
        <TextField
          name="title"
          label="Title"
          value={inputs.title}
          error={errors.title}
          onChange={onChange}
        />
        <TextField
          name="content"
          label="Content"
          multiline
          rows={5}
          value={inputs.content}
          error={errors.content}
          onChange={onChange}
        />
        <Button variant="contained" disabled={submitting} onClick={handleSubmit}>
          Report
        </Button>
        {/* <ComboBox list={ctype_id} name="curation type" /> */}
      </Box>
    </div>
  );
}
