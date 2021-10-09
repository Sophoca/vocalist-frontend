import axios from 'axios';
import { useAsync } from 'react-async';
import YouTube from 'react-youtube';
require('dotenv').config();

const Youtube_Key = process.env.REACT_APP_YOUTUBE_KEY;
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

async function getYoutubeID({ keyword }) {
  const params = {
    key: Youtube_Key,
    q: keyword,
    part: 'snippet',
    maxResults: 1,
    type: 'video'
  };
  const response = await axios.get('/search', { params });
  return response.data;
}

const VideoPlayer = props => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        title={props.etag}
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
        allowFullScreen
        style={{ width: 480, height: 270, border: 0 }}
      ></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>
);

export default function YoutubeSearch({ keyword }) {
  const { data, error, isLoading } = useAsync({
    promiseFn: getYoutubeID,
    keyword,
    watch: keyword
  });

  const opts = {
    height: '270',
    width: '480',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  console.log('key', process.env.REACT_APP_YOUTUBE_KEY);
  console.log(data);

  return (
    <>
      <VideoPlayer video={data.items[0]} />
      {/* <YouTube videoId={data.items[0].id.videoId} opts={opts} /> */}
    </>
  );
}
