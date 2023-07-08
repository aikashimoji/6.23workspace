import { useState, useEffect } from 'react';
import { Menu, Layout, Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
import { Auth } from '@aws-amplify/auth';
import AuthContext from './AuthContext';  // AuthContextのインポート

const MainLayout = ({children}) => {
  const { Header, Footer, Content } = Layout;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function handleLogout() {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      message.error('認証に失敗しました');
    }
  }

  return (
    // AuthContext.Providerを追加し、認証状態を共有します
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Layout>
        {/* レイアウトのコード... */}
      </Layout>
    </AuthContext.Provider>
  );
}

export default MainLayout;
