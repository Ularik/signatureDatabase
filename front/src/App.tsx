import { Routes, Route } from 'react-router';
import BackLogo from './components/UI/BackLogo/BackLogo';
import Home from './containers/Home';
import BlackListIp from './containers/BlackListIp';
import BlackListUrl from './containers/BlackListUrl';
import { Container, Typography } from '@mui/material';
import Header from './components/UI/Header/Header';
import GlobalStyles from "@mui/material/GlobalStyles";
import CompromiseIdentity from './containers/CompromiseIdentity';


const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: "#1B3153",
        fontFamily: "'Inter', sans-serif",
        margin: 0,
      },
      "*": { boxSizing: "border-box" },
    }}
  />
);

const App = () => {
  

  return (
    <>
      {inputGlobalStyles}
      <Header />
      <BackLogo />
      <Container maxWidth={false} sx={{ maxWidth: "1512px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/black-list-ip" element={<BlackListIp />} />
          <Route path="/black-list-url" element={<BlackListUrl />} />
          <Route path="/compromise-identity" element={<CompromiseIdentity />} />
          <Route path="*" element={<Typography>PAGE NOT FOUND</Typography>} />
        </Routes>
      </Container>
    </>
  );
}

export default App
