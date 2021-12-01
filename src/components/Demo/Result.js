import React, { useState } from 'react';

import useAsync from 'useAsync';
import { MusicApi } from 'api';
import ClusterCard from './ClusterCard';
import PurpleButton from 'components/PurpleButton';
import { Box } from '@mui/system';

const Result = ({ location, history }) => {
  const checked = location.state.checked;
  async function fetchData() {
    try {
      const responses = await Promise.all(checked.map(el => MusicApi.getCluster(el.cluster)));
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
    <div
      className="flex column gap10"
      style={{ width: '100%', height: '100%', padding: '20px 0', flexWrap: 'nowrap' }}
    >
      <Box
        className="box"
        style={{ flexShrink: 1, flexGrow: 1, justifyContent: 'flex-start', gap: 10 }}
      >
        {data.map((el, idx) => (
          <ClusterCard
            key={idx}
            checked={checked[idx]}
            clusterInfo={el.body}
            style={{ flex: 1 }}
          ></ClusterCard>
        ))}
      </Box>
      <div style={{ width: '100%', textAlign: 'center', flexShrink: 0, flexGrow: 0 }}>
        <PurpleButton onClick={() => history.goBack()}>Back</PurpleButton>
      </div>
    </div>
  );
};

export default Result;
