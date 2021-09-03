import React, { memo, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

const App = memo((props) => {
  return (
    <div className="App">
      <Suspense fallback={<p>...Loading</p>}>{routes}</Suspense>
    </div>
  );
});

export default withRouter(App);
