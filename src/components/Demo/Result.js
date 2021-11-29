import React, { useState } from 'react';

const Result = ({ match, history }) => {
  // async function fetchData() {
  //   try {
  //     const response = await DemoApi.getList(155);
  //     return response.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // const [state, refetch] = useAsync(fetchData, []);
  // const { loading, data, error } = state;
  // console.log(state);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>error</div>;
  // if (!data) return null;
  console.log(match, history);

  return (
    <div>
      <div>DemoResult</div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Result;
