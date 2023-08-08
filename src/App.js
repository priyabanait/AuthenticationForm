import { Routes, Route,Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/AuthContext';
function App() {
  const context=useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path='/' Component={HomePage} exact>
        </Route>

      {!context.isLogin && (
        <Route path='/auth' Component={AuthPage}>
        </Route>)}

        {context.isLogin &&<Route path='/profile' Component={UserProfile}>
        </Route>}
        
         <Route path="*" element={<Navigate replace to="/auth" />} />
      </Routes>
    </Layout>
  );
}

export default App;
