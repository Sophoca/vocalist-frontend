import * as youtubeSearch from 'youtube-search';
import React from 'react';
require('dotenv').config();

const Youtube_Key = process.env.REACT_APP_YOUTUBE_KEY;

const YoutubeSearch = ({ keyword }) => {
  var opts = {
    key: Youtube_Key,
    // part: 'snippet',
    maxResults: 5
    // type: 'video'
  };
  console.log('key', process.env.REACT_APP_YOUTUBE_KEY);
  youtubeSearch(keyword, opts, (err, response) => {
    if (err) return console.log(err);
    console.log(response, Youtube_Key);
  });
  return <div></div>;
};

export default YoutubeSearch;
