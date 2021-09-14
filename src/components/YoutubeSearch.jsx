import axios from 'axios';
import { useEffect, useState } from 'react';
require('dotenv').config();

const Youtube_Key = process.env.REACT_APP_YOUTUBE_KEY;

const getResponse = async () => {
  const [params, setParams] = useState({
    key: Youtube_Key,
    part: 'snippet',
    q: keyword,
    maxResults: 5,
    type: 'video'
  });

  export default function YoutubeSearch({ keyword }) {
    axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
  }
  return <div>{getResponse}</div>;
};
