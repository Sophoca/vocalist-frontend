import React from 'react';
import { CurationApi, MusicApi } from '../api';
import InputForm from '../components/Curation/InputForm';
import useAsync from '../useAsync';
import Box from '@mui/material/Box';
import CurationList from '../components/Curation/CurationList';

const AddCuration = () => {
  async function fetchData() {
    const responses = await Promise.all([
      CurationApi.getCtypeAll(),
      MusicApi.getAllMusic('part'),
      CurationApi.getAllCuration()
    ]);
    return responses.map(response => response.data);
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20
      }}
    >
      <InputForm clist={data[0].body} musicLists={data[1].body} refetch={refetch} />
      <CurationList clist={data[2].body} />
    </div>
  );
};

export default AddCuration;
