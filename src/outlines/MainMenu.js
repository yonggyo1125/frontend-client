import React from 'react';
import { getCommonStates } from '@/commons/contexts/CommonContext';

const MainMenu = () => {
  const { showMainMenu } = getCommonStates();

  return showMainMenu && <h1>메인 메뉴</h1>;
};

export default React.memo(MainMenu);
