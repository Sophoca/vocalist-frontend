import React, { useEffect, useState } from 'react';
import { CurationApi, MusicApi } from '../api';
import useAsync from '../useAsync';
import ComboBox from '../components/ComboBox';

const AddCuration = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await Promise.all([CurationApi.getCtypeAll(), MusicApi.getMusicAll()]);
      // .then(function (responses) {
      //   // Get a JSON object from each of the responses
      //   return Promise.all(
      //     responses.map(function (response) {
      //       return response.json();
      //     })
      //   );
      // })
      // .then(function (data) {
      //   // Log the data to the console
      //   // You would do something with both sets of data here
      //   console.log(data);
      // })
      // .catch(function (error) {
      //   // if there's an error, log it
      //   console.log(error);
      // });
      // console.log(music_list, c_type);
      setData(data);
    };
    getData();
  }, []);

  console.log(data);

  // useEffect(() => {
  //   async function getData() {
  //     const data = Promise.all([CurationApi.getCtypeAll, MusicApi.getMusicAll])
  //       .then(responses => Promise.all(responses.map(response => response.json)))
  //       .then(data => {
  //         console.log(data);
  //       });
  //     console.log(data);
  //   }
  //   getData();
  // }, []);

  // const [state, refetch] = useAsync(CurationApi.getCtypeAll, []);
  // const { loading, data, error } = state;

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error!</div>;
  // if (!data) return null;

  const fontStyle = { fontFamily: 'sans-serif', fontSize: 1 + 'rem' };

  // const ctype = data.data.body.map(el => {
  //   return { label: el.title, id: el.id };
  // });

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Curation</h2>
    </div>
  );
};

export default AddCuration;
