import { Routes, Route } from "react-router";
import BackLogo from "./components/UI/BackLogo/BackLogo";
import Home from "./containers/Home";
import BlackListIp from "./containers/BlackListIp";
import BlackListUrl from "./containers/BlackListUrl";
import { Container, Typography } from "@mui/material";
import Header from "./components/UI/Header/Header";
import GlobalStyles from "@mui/material/GlobalStyles";
import CompromiseIdentity from "./containers/CompromiseIdentity/CompromiseIdentity";
import { selectUser } from "./components/user/store/userSelectors";
import { useAppSelector } from "./app/hooks";

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
  const user = useAppSelector(selectUser);

  return (
    <>
      {inputGlobalStyles}
      <Header user={user} />
      <BackLogo />
      <Container
        maxWidth={false}
        sx={{ maxWidth: "1512px", paddingInline: { sm: "8px", md: "16px" } }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/black-list-ip" element={<BlackListIp />} />
          <Route path="/black-list-url" element={<BlackListUrl />} />
          <Route
            path="/compromise-identity"
            element={<CompromiseIdentity user={user} />}
          />
          <Route path="*" element={<Typography>PAGE NOT FOUND</Typography>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
