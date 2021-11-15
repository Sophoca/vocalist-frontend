import React, { useState } from 'react';

import GoogleLoginButton from 'components/GoogleLoginButton';
import AppleLoginButton from 'components/AppleLoginButton';
import YoutubeSearch from 'components/YoutubeSearch';
import Modal from 'components/Modal';
import BugReport from 'components/BugReport/BugReport';
import BugList from 'components/BugReport/BugList';

const Test = () => {
  const music_lists = ['next level', '신호등', '색안경'];
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = status => {
    setModalOpen(status);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="p20">
      <h1>VLOOM</h1>
      <button onClick={() => handleModal(true)}>modal test</button>
      <BugReport></BugReport>
      <BugList></BugList>
      {/* <div style={{ display: 'flex', gap: 10 }}></div> */}
      {/* <h2>Test google login</h2>
      <GoogleLoginButton></GoogleLoginButton>
      <h2>Test apple login</h2>
      <AppleLoginButton></AppleLoginButton> */}
      {/* <h2>Test youtube API</h2>
      <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
        {music_lists.map((el, idx) => (
          <YoutubeSearch key={idx} keyword={el}></YoutubeSearch>
        ))}
      </div> */}
      {modalOpen && (
        <Modal
          className="modal-popup"
          children={<div>Modal Test</div>}
          isLayoutScrollEnabled={true}
          onClickClose={() => closeModal(false)}
        />
      )}
    </div>
  );
};

export default Test;
