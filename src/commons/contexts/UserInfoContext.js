import React, { createContext, useState, useContext } from 'react';

import cookies from 'react-cookies';
import { apiUser } from '@/member/apis/apiLogin';

const UserInfoContext = createContext({
  states: {
    // 상태 값
    userInfo: null,
    isLogin: false,
    isCounselor: false,
    isProfessor: false,
    isAdmin: false, // 관리자 여부
  },
  actions: {
    // 상태 변경 함수
    setUserInfo: null,
    setIsLogin: null,
    setIsCounselor: null,
    setIsProfessor: null,
    setIsAdmin: null,
  },
});

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [isCounselor, setIsCounselor] = useState(null);
  const [isProfessor, setIsProfessor] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const value = {
    states: { userInfo, isLogin, isAdmin, isCounselor, isProfessor },
    actions: {
      setUserInfo,
      setIsLogin,
      setIsAdmin,
      setIsCounselor,
      setIsProfessor,
    },
  };

  const token = cookies.load('token');
  if (!isLogin && token && token.trim()) {
    (async () => {
      try {
        const user = await apiUser();

        setUserInfo(user);
        setIsLogin(true);

        setIsAdmin(user.userType === 'ADMIN');
        setIsCounselor(user.userType === 'COUNSELOR');
        setIsProfessor(user.userType === 'PROFESSOR');
      } catch (err) {
        // 토큰 만료, 토큰이 잘못된 경우
        cookies.remove('token', { path: '/' });
      }
    })();
  }

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

const { Consumer: UserInfoConsumer } = UserInfoContext;

export { UserInfoConsumer, UserInfoProvider };

export const getUserStates = () => {
  const { states } = useContext(UserInfoContext);
  return states;
};

export const getUserActions = () => {
  const { actions } = useContext(UserInfoContext);
  return actions;
};

export const getUserContext = () => {
  return useContext(UserInfoContext);
};

export default UserInfoContext;
