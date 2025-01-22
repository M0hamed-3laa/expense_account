import "./Create.css";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from "@mui/material";

import { blue } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: blue[400],
  },
}));

function Create() {
  //states
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const nav = useNavigate();
  //mui theme
  const theme = useTheme();
  //send data to server
  const sendData = () => {
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }), // إرسال البيانات ككائن
    }).then(() => nav("/"));
  };
  return (
    <Box
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
      onSubmit={(e) => e.preventDefault()} // منع إعادة تحميل الصفحة
    >
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        onChange={(e) => setPrice(Number(e.target.value))}
        fullWidth
        label="Transaction Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton
        onClick={() => {
          sendData();
        }}
        sx={{ mt: "22px", bgcolor: theme.palette.primary.main }}
        variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}

export default Create;
