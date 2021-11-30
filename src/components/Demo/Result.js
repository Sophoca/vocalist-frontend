import React, { useState } from 'react';

import useAsync from 'useAsync';
import { MusicApi } from 'api';
import ClusterCard from './ClusterCard';
import PurpleButton from 'components/PurpleButton';

const Result = ({ match, history }) => {
  const cId = match.params.id.split(',');
  async function fetchData() {
    try {
      const responses = await Promise.all(cId.map(el => MusicApi.getCluster(el)));
      return responses.map(response => response.data);
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  const [state, refetch] = useAsync(() => fetchData(), []);
  const { loading, data, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;
  console.log(data);
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          maxHeight: '80vh',
          overflow: 'scroll',
          border: '1px solid black'
        }}
      >
        {data.map((el, idx) => (
          <ClusterCard key={idx} clusterInfo={el.body}></ClusterCard>
        ))}
      </div>
      <PurpleButton onClick={() => history.goBack()}>Back</PurpleButton>
    </>
  );
};

export default Result;
