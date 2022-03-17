import React, { useState } from 'react';

import { PrivacyApi } from 'api';
import useAsync from 'useAsync';

const Privacy = () => {
  async function fetchData() {
    try {
      const responses = await Promise.all([PrivacyApi.getOne(), PrivacyApi.getTwo()])
      return responses.map(response => response.data);
    } catch (err) {
      console.error(err)
    }
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;
  console.log(data)

  return (
    <div style={{ marginTop: '68px' }}>
      <h3>{data[0].body.title}</h3>
      <p className="preline">{data[0].body.content}</p>
      <h3>{data[1].body.title}</h3>
      <p className="preline">{data[1].body.content}</p>
    </div>
  );
}

export default Privacy;
