import React, { useState } from 'react';
import { Box } from '@mui/material';

import { BugReportApi } from 'api';
import useAsync from 'useAsync';
import BugCard from './BugCard';

export default function BugList() {
  async function fetchData() {
    try {
      const response = await BugReportApi.get();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  console.log(state);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;
  return (
    <div>
      <h2>Bug List</h2>
      <Box className="box" component="div">
        {data.body.map(el => (
          <BugCard info={el} />
        ))}
      </Box>
    </div>
  );
}
