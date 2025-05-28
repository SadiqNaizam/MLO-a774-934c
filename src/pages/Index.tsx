import React from 'react';
import CentralizedContainer from '../components/layout/CentralizedContainer';
import LoginForm from '../components/Login/LoginForm';

/**
 * IndexPage serves as the main login page for the application.
 * It utilizes the CentralizedContainer to ensure the content (LoginForm)
 * is centered on the screen, providing a clean and focused user experience.
 */
const IndexPage: React.FC = () => {
  return (
    <CentralizedContainer>
      <LoginForm />
    </CentralizedContainer>
  );
};

export default IndexPage;
