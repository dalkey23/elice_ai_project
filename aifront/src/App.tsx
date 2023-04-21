import React from 'react';
import Main from './Page/Main/Main';
// 20230421 이효상 recoil import
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const App : React.FC = () => {
  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}

export default App;
