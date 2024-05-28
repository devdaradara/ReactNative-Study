import React from 'react';
import { RecoilRoot } from 'recoil';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}

export default App;