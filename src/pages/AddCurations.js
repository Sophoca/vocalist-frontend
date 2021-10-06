import React, { useEffect, useState } from 'react';
import { CurationApi, MusicApi } from '../api';
import InputForm from '../components/InputForm';
import useAsync from '../useAsync';

const AddCuration = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [resA, resB] = await Promise.all([CurationApi.getCtypeAll(), MusicApi.getMusicAll()]);
  //       setData({ music_list: resA, c_type: resB });
  //       setLoading(false);
  //     } catch (e) {
  //       setError(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);

  // useEffect(() => {
  //   async function getData() {
  //     await Promise.all([CurationApi.getCtypeAll, MusicApi.getMusicAll])
  //       .then(responses => Promise.all(responses.map(response => response.json)))
  //       .then(data => setData(data));
  //   }
  //   getData();
  // }, []);

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

  // const clist = data[0].data.body.map(el => ({ label: el.title, id: el.id }));
  // const musicLists = data[1].data.body.map(el => ({ label: el.title, id: el.id }));

  return (
    <div style={{ padding: 20, marginLeft: 20, marginRight: 20 }}>
      <h2>Add Curation</h2>
      <InputForm clist={data[0].data.body} musicLists={data[1].data.body} />
    </div>
  );
};

export default AddCuration;
