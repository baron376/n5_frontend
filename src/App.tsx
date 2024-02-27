import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import PermissionList from './components/PermissionList';
import PermissionEdit from './components/PermissionEdit';

const theme = createTheme({
  // Define your theme options here
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<PermissionList />} />
            <Route path="/permission-edit/" element={<PermissionEdit/>} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};
export default App;
