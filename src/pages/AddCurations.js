import React from 'react';
import { fetchDatas, CurationApi, MusicApi } from '../api';
import InputForm from '../components/AddCuration/InputForm';
import useAsync from '../useAsync';

const AddCuration = () => {
  async function fetchData() {
    const responses = await Promise.all([CurationApi.getCtypeAll(), MusicApi.getMusicAll()]);
    return responses.map(response => response.data);
  }

  const [state, refetch] = useAsync(fetchData);
  const { loading, data, error } = state;
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div style={{ padding: 20, marginLeft: 20, marginRight: 20 }}>
      <h2>Add Curation</h2>
      <InputForm clist={data[0].body} musicLists={data[1].body} />
    </div>
  );
};

export default AddCuration;
