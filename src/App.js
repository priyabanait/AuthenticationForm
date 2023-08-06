import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' Component={HomePage} exact>
          
        </Route>
        <Route path='/auth' Component={AuthPage}>
          
        </Route>
        <Route path='/profile' Component={UserProfile}>
         
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
