import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import ProTip from './ProTip';
// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Wellcome to chat with Leora
          <SignIn />
        </Typography>
        <ProTip />
      </Box>
    </Container>
    </div>
  );
}

export default App;


