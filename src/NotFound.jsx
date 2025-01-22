import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box>
      <Typography mt={25} variant="h5" color="error">
        This page does not exist yet
      </Typography>
    </Box>
  );
}

export default NotFound;
