import React from 'react';
import Main from './pages/Main/Main';
// 20230421 이효상 recoil import
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}

export default App;
