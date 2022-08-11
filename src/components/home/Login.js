import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from '../SignIn/SignIn';

const Login = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome, I am Leora
                <SignIn />
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
