import React from 'react';

const Auth = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row g-3 justify-content-center">
              <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" className="form-control" id="staticEmail2" placeholder="Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-secondary mb-3">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Auth;
