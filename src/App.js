import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Fragment>
      <Navbar />
        <Main />
        <Footer />
    </Fragment>
  );
}

export default App;
