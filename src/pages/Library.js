import React, { useState } from 'react';
import { PlaylistApi } from '../api';
import PlaylistCard from '../components/Playlist/PlaylistCard';
import useAsync from '../useAsync';

const Library = () => {
  const user_id = 1;
  async function fetchData() {
    try {
      const responses = await Promise.all([PlaylistApi.getPlaylist(user_id)]);
      return responses.map(response => response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const [state, refetch] = useAsync(fetchData, []);
  const { loading, data, error } = state;
  const [pId, setPId] = useState(null);
  console.log(pId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  return (
    <div className="p20">
      <div>library</div>
      <div style={{ width: 700 }}>좋아요 한 노래</div>
      <div>저장한 플레이리스트</div>
      <div className="box">
        {data[0].body.map(el => (
          <PlaylistCard info={el} setId={setPId} pId={pId} />
        ))}
      </div>
    </div>
  );
};

export default Library;
