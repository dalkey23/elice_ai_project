import React from 'react';
import Main from './Page/Main/Main';
import { RouterProvider } from 'react-router-dom';
import router from './Component/Route/RouteAsh'
import { QueryClientProvider, QueryClient} from 'react-query'

// 20230421 이효상 recoil import
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const queryClient = new QueryClient()

const App : React.FC = () => {
  return (

    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
