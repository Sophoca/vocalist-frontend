import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.vloom.co.kr:3000/'
});

export const BugReportApi = {
  get: () => api.get('/bug'),
  post: values => api.post('/bug', values)
};

export const LoginApi = {
  isExist: (email, type) =>
    api.get('/login', {
      params: {
        email: email,
        type: type
      }
    }),
  createAccount: (response, type) =>
    api.post('/login', {
      email: response.email,
      name: response.name,
      type: type
    }),
  GoogleApi: response =>
    axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
      params: {
        id_token: response.tokenId
      }
    })
};

export const CurationApi = {
  getAllCuration: () =>
    api.get('/curation', {
      params: { id: 0 }
    }),
  getCuration: id =>
    api.get('/curation/item', {
      params: { curation_id: id }
    }),
  createCuration: ({ title, content, ctype_id, music_id_list }) =>
    api.post('/curation', {
      title: title,
      content: content,
      ctype_id: ctype_id,
      music_id_list: music_id_list
    }),
  modifyCurationItems: (curation_id, addList, delList) =>
    api.patch('/curation/item/list', {
      curation_id: curation_id,
      insert_list: addList,
      delete_list: delList
    }),
  getCtypeAll: () =>
    api.get('/ctype', {
      params: { id: 0 }
    }),
  getCtype: id =>
    api.get('/ctype', {
      params: { id: id }
    })
};

export const MusicApi = {
  getAllMusic: () =>
    api.get(`/music`, {
      params: { id: 0, user_id: 0 }
    }),
  getMusic: (id, user_id) =>
    api.get(`/music`, {
      params: { id: id, user_id: user_id }
    }),
  getCluster: cluster =>
    api.get('/music/rec/cluster', {
      params: { cluster: cluster, user_id: -1 }
    })
};

export const PlaylistApi = {
  getPlaylist: user_id =>
    api.get('/playlist', {
      params: { user_id: user_id }
    }),
  createPlaylist: (user_id, title, visible) => {
    api.post('/playlist', {
      user_id: user_id,
      title: title,
      visible: visible
    });
  },
  deletePlaylist: id => {
    api.delete('/playlist', {
      id: id
    });
  },
  getPlaylistItem: (playlist_id, user_id) =>
    api.get('/playlist/item', {
      params: { playlist_id: playlist_id, user_id: user_id }
    }),
  addPlaylistItem: (playlist_id, music_id) =>
    api.post('/playlist/item', {
      playlist_id: playlist_id,
      music_id: music_id
    }),
  deletePlaylistItem: (playlist_id, music_id) =>
    api.delete('playlist/item', {
      playlist_id: playlist_id,
      music_id: music_id
    })
};

export const LikeApi = {
  getLike: user_id => {
    api.get('/love/list', {
      params: { user_id: user_id }
    });
  },
  addLike: (music_id, user_id) => {
    api.post('/love', {
      music_id: music_id,
      user_id: user_id
    });
  },
  deleteLike: (music_id, user_id) => {
    api.delete('/love', {
      music_id: music_id,
      user_id: user_id
    });
  }
};

export const DemoApi = {
  getAll: () =>
    api.get('/dev/demo', {
      params: { id: 0 }
    }),
  getList: list_id =>
    api.get('/dev/demo', {
      params: { id: list_id }
    })
};
