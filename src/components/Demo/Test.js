import { map } from '@firebase/util';
import { CurationApi, DemoApi } from 'api';
import StyledLink from 'components/StyledLink';
import React, { useState } from 'react';

import useAsync from 'useAsync';

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
  const [id, setId] = useState(0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  const musicList = shuffle(data.body).slice(0, 50);
  console.log(musicList, match);

  return (
    <div style={{ width: '100%' }}>
      <div>Demo</div>
      <div style={{ height: '600px', overflow: 'auto', border: '1px solid black' }}>
        {musicList.map(el => (
          <div>
            {`${el.title} - ${el.artist}`}
            {/* {el.cluster} */}
          </div>
        ))}
      </div>
      <StyledLink to={`${match.url}/${id}`}>
        <button>결과확인</button>
      </StyledLink>
    </div>
  );
};

export default Test;
