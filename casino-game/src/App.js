import React, { memo, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { routes } from './routes';
import './App.css';
import '../src/css/app.css';
import Header from '../src/containers/common/header';

const App = memo((props) => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>...Loading</p>}>{routes}</Suspense>
    </div>
  );
});

export default withRouter(App);
