import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { CurationApi, MusicApi } from 'api';
import CreateCuration from 'components/Curation/CreateCuration';
import useAsync from 'useAsync';
import CurationList from 'components/Curation/CurationList';
import ItemList from 'components/Curation/ItemList';
import 'components/Curation/curation.css';

const Curation = () => {
  async function fetchData() {
    try {
      const responses = await Promise.all([
        CurationApi.getCtypeAll(),
        MusicApi.getAllMusic(),
        CurationApi.getAllCuration()
      ]);
      return responses.map(response => response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  const [cId, setCId] = useState(null);
  console.log(state);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  return (
    <Grid container spacing={1} sx={{ padding: 20 + 'px', minWidth: 1100 + 'px' }}>
      <Grid item xs={12} sm={4}>
        <CreateCuration clist={data[0].body} musicLists={data[1].body} refetch={refetch} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CurationList clist={data[2].body} setCId={setCId} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ItemList curation_id={cId} musicLists={data[1].body} />
      </Grid>
    </Grid>
  );
};

export default Curation;
