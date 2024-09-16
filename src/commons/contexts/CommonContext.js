import React, { createContext, useState } from 'react';

const CommonContext = createContext({
  mainTitle: '',
  subTitle: '',
});

const CommonProvider = ({ children }) => {
  const [mainTitle, setMainTitle] = useState('테스트');
  const [subTitle, setSubTitle] = useState('');

  const value = {
    states: { mainTitle, subTitle },
    actions: { setMainTitle, setSubTitle },
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};

const { Consumer: CommonConsumer } = CommonContext;

export { CommonProvider, CommonConsumer };

export default CommonContext;
