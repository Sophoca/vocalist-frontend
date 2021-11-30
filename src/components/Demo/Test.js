import React, { useState } from 'react';

import { CurationApi, DemoApi } from 'api';
import useAsync from 'useAsync';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  const musicList = shuffle(data.body)
    .filter((el, idx, callback) => idx === callback.findIndex(t => t.cluster === el.cluster)) // 중복 클러스터 제거
    .slice(0, 50); // 50개 추출

  return (
    <div style={{ width: '100%', margin: '20px 0' }}>
      <div>최대 3개의 노래를 골라보세요!</div>
      <MusicItem infos={musicList} match={match} />
    </div>
  );
};

export default Test;
