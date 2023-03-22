import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';
import SideBarAndAppRouter from './components/SideBarAndAppRouter';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/adminAPI';


const App = observer(() => {
  const {admin} = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    check().then(data => {
      admin.setAdmin(true);
      admin.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [admin]);

  if (loading) {
    return (
      <div className="spinner-border d-flex justify-content-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <div className='App'>
      <BrowserRouter>
          <SideBarAndAppRouter />
      </BrowserRouter>
    </div>
  );
});

export default App;
