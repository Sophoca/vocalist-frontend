import React, { useState } from 'react';
import { CurationApi, MusicApi } from '../api';
import CreateCuration from '../components/Curation/CreateCuration';
import useAsync from '../useAsync';
import CurationList from '../components/Curation/CurationList';
import ItemList from '../components/Curation/ItemList';
import '../components/Curation/curation.css';

const Curation = () => {
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
        gap: 20
      }}
    >
      <CreateCuration clist={data[0].body} musicLists={data[1].body} refetch={refetch} />
      <CurationList clist={data[2].body} setCId={setCId} />
      {cId && <ItemList curation_id={cId} musicLists={data[1].body} />}
    </div>
  );
};

export default Curation;
