import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
const LoginPage = ({ searchParams }) => {
  // params - 경로변후, searchParams - 쿼리스트링
  return (
    <GuestOnlyContainer>
      <LoginContainer searchParams={searchParams} />
    </GuestOnlyContainer>
  );
};

export default LoginPage;
