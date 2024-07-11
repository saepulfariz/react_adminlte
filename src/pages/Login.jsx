// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Helmet  } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/adminlte.css';

const Login = () => {
//   const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // history.push('/dashboard')
    navigate('/dashboard');
  };

  return (
    <div >
        <Helmet>
            <title>Login - My AdminLTE</title>
        </Helmet>
        <div className="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
            <b>Admin</b>LTE
            </div>
            <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                    </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                    <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                    <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                        Remember Me
                        </label>
                    </div>
                    </div>
                    <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Login;
