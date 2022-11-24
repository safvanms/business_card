import React from 'react';
import ReactDOM from 'react-dom';
import Main from './componants/Main' ;
import Footer from './componants/Footer' ;
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className='card'>
      <Main/>
      <Footer />
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));
