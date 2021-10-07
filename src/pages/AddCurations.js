import React, { useEffect, useState } from 'react';
import { CurationApi, MusicApi } from '../api';
import InputForm from '../components/AddCuration/InputForm';
import useAsync from '../useAsync';

const AddCuration = () => {
  const fetchData = async () => {
    const data = await Promise.all([CurationApi.getCtypeAll(), MusicApi.getMusicAll()]);
    console.log(data);
    return data;
  };
  const [state, refetch] = useAsync(fetchData);
  const { loading, data, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div style={{ padding: 20, marginLeft: 20, marginRight: 20 }}>
      <h2>Add Curation</h2>
      <InputForm clist={data[0].data.body} musicLists={data[1].data.body} />
    </div>
  );
};

export default AddCuration;
