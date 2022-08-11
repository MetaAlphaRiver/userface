import './style.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <div className="page">
            <div className="header">
              <Button type="submit"
                onClick={(e) => { navigate("/home", { replace: true }); }}
                size="small"
                variant="contained"
              >
                HOME
            </Button>
            </div>
            <div className="main"></div>
            <div className="footer">
              <span className="btn">SCHEDULE</span>
              <span className="btn">CHAT</span>
              <span className="btn btn2">MY SPACE</span>
            </div>
          </div>
        </Container>
      </ThemeProvider >
    </>
  )
}