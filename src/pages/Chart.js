import React from 'react';

import MusicList from 'components/Playlist/MusicList';

const Chart = () => {
  return (
    <>
      <h2>Chart</h2>
      <MusicList list={tempData} />
    </>
  );
};

export default Chart;

const tempData = [
  {
    id: 7,
    itunes_id: 3108,
    title: '철부지',
    artist: '딕펑스',
    genre: '팝 > 발라드, 팝 > 팝 락',
    time: 237,
    year: 2013,
    cluster: null,
    youtube: null,
    number: null,
    islike: 0
  },
  {
    id: 9,
    itunes_id: 3112,
    title: 'Love and Hate',
    artist: '보아',
    genre: 'Ballad',
    time: 244,
    year: 2015,
    cluster: null,
    youtube: null,
    number: null,
    islike: 0
  },
  {
    id: 10,
    itunes_id: 3114,
    title: 'Smash',
    artist: '보아',
    genre: 'K-Pop',
    time: 153,
    year: 2015,
    cluster: null,
    youtube: null,
    number: null,
    islike: 0
  },
  {
    id: 1,
    itunes_id: 3096,
    title: '한번만 더',
    artist: '나얼',
    genre: 'R&B',
    time: 336,
    year: 2005,
    cluster: null,
    youtube: null,
    number: null,
    islike: 0
  }
];
