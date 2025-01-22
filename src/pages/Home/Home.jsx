import "./Home";
import { Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
function Home() {
  const [data, setData] = useState([]);
  // Get data from server
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //handel delete
  const handelDalete = (id) => {
    fetch(`http://localhost:3100/mydata/${id}`, {
      method: "DELETE",
    }).then(() => setData(data.filter((el) => el.id !== id)));
  };

  return (
    <Box>
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            mb: "22px",
            pt: "27px",
            pb: "7px",
          }}>
          <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
            {item.title}
          </Typography>
          <Typography
            sx={{
              mr: "33px",
              fontWeight: 500,
              fontSize: "1.4em",
              opacity: "0.8",
            }}
            variant="h6">
            ${item.price}
          </Typography>

          <IconButton
            onClick={() => {
              //delete item
              handelDalete(item.id);
            }}
            sx={{ position: "absolute", top: "0", right: "0" }}>
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      ))}
      <Typography variant="h6" sx={{ mt: "22px", textAlign: "center" }}>
        👉 Your spend : ${data.reduce((acc, item) => acc + item.price, 0)}
      </Typography>
    </Box>
  );
}

export default Home;
