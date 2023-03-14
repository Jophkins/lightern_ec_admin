import React, { useContext } from 'react';
import { login } from '../../http/adminAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const Auth = observer(() => {

  const {admin} = useContext(Context);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = async () => {
    try {
      let data = await login(email, password);
      admin.setAdmin(admin);
      admin.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

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
                       required
                />
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       required
                />
              </div>
              <div className="col-auto">
                <button onClick={signIn} className="btn btn-outline-secondary mb-3">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
});

export default Auth;
