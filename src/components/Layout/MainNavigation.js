import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/AuthContext';
const MainNavigation = () => {
  const context=useContext(AuthContext);
  const isLogin=context.isLogin
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!isLogin &&  <li>
            <Link to='/auth'>Login</Link>
          </li>}
         {isLogin && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLogin && <li>
            <button>Logout</button>
          </li>}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
