import React, { memo, Suspense, useEffect } from 'react';
import { routes } from '../routes';
import '../App.css';
import '../css/app.css';
import Header from '../containers/common/header';

const App = memo((props) => {
  const { setCurrentGame } = props;

  useEffect(() => {
    setCurrentGame();
  }, [setCurrentGame]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>...Loading</p>}>{routes}</Suspense>
    </div>
  );
});

App.defaultProps = {
  setCurrentGame: () => {}
}

export default App;
