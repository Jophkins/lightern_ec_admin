import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from '../AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const SidebarAndAppRouter =  observer(() => {

  const {admin} = React.useContext(Context);

  const logOut = () => {
    admin.setAdmin({});
    admin.setIsAuth(false);
    localStorage.removeItem('token');
  }

  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap'>
        <div className='sidebar col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-dark'>
          <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
            <Link to='/' className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
              <span className='fs-5 d-none d-sm-inline'>ESTETIKA SVETA</span>
            </Link>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                id='menu'>
              <li className='nav-item'>
                <Link to='/' className='nav-link align-middle px-0'>
                  <i className='fs-4 bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Главная</span>
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/products' className='nav-link align-middle px-0'>
                  <i className='fs-4 bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Управление товарами</span>
                </Link>
              </li>

              <li>
                <Link to='/orders' className='nav-link px-0 align-middle'>
                  <i className='fs-4 bi-table'></i> <span className='ms-1 d-none d-sm-inline'>Заказы</span></Link>
              </li>
            </ul>
            <hr />
            <div className='dropdown pb-4'>
              <Link to='/' className='d-flex align-items-center text-white text-decoration-none dropdown-toggle'
                    id='dropdownUser1' data-bs-toggle='dropdown' aria-expanded='false'>
                <img src='https://github.com/mdo.png' alt='hugenerd' width='30' height='30'
                     className='rounded-circle' />
                <span className='d-none d-sm-inline mx-1'>Администратор</span>
              </Link>
              <ul className='dropdown-menu dropdown-menu-dark text-small shadow' aria-labelledby='dropdownUser1'>
                <li><Link onClick={logOut} className='dropdown-item' to='/'>Выйти</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='main-content col py-3'>
          <div className="container d-flex justify-content-center">
            TODO:
            <ul>
              <li>Поиск по артиклю</li>
            </ul>
          </div>
          <AppRouter />
        </div>
      </div>
    </div>
  );
});

export default SidebarAndAppRouter;
