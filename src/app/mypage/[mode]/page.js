import BoardContainer from '@/mypage/containers/BoardContainer';
import InfoContainer from '@/mypage/containers/InfoContainer';

const MypageModePage = ({ params }) => {
  const { mode } = params;

  let Container = null;
  switch (mode) {
    case 'board':
      Container = BoardContainer;
      break;
    default:
      Container = InfoContainer;
  }

  return <Container />;
};

export default MypageModePage;
