import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";


const Spinner = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          color: 'white',
          bgcolor: "rgba(30, 58, 95, 0.9)",
        }}
      >
        <CircularProgress color="inherit" size={"3rem"} />
      </Box>
    );
};

export default Spinner;