import React, { useState } from 'react';
import { CurationApi, MusicApi } from '../api';
import InputForm from '../components/Curation/InputForm';
import useAsync from '../useAsync';
import CurationList from '../components/Curation/CurationList';
import MusicList from '../components/Curation/MusicList';

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
  const [cId, setCId] = useState(null);
  console.log(state);

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
      <CurationList clist={data[2].body} setCId={setCId} />
      {cId && <MusicList curation_id={cId} />}
    </div>
  );
};

export default AddCuration;
