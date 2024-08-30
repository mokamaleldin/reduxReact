import { authActions } from '../store/auth';
import classes from '../ui/Auth.module.css';

import { useDispatch } from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch();
  const logintHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  }
  return (
    <main className={ classes.auth }>
      <section>
        <form onSubmit={ logintHandler }>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
