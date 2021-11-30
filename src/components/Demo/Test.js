import React, { useState } from 'react';
import { Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { CurationApi, DemoApi } from 'api';
import StyledLink from 'components/StyledLink';
import useAsync from 'useAsync';
import PurpleButton from 'components/PurpleButton';
import MusicItem from './MusicItem';

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const Test = ({ match }) => {
  async function fetchData() {
    try {
      // const response = await DemoApi.getList(155);
      const response = await CurationApi.getCuration(155);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  const [id, setId] = useState([]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  const musicList = shuffle(data.body).slice(0, 50);
  console.log(musicList, match, id.length);

  return (
    <div style={{ width: '100%' }}>
      <div>Demo</div>
      <div style={{ height: '600px', overflow: 'auto', border: '1px solid black' }}>
        <MusicItem infos={musicList} />
      </div>

      <PurpleButton
        disabled={id.length === 0}
        component={StyledLink}
        to={`${match.url}/${id.toString()}`}
      >
        결과확인
      </PurpleButton>
    </div>
  );
};

export default Test;
