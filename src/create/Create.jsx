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
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: blue[400],
  },
}));

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", price: 0 }, // القيم الافتراضية
  });

  const nav = useNavigate();
  const theme = useTheme();

  // إرسال البيانات للسيرفر
  const sendData = (data) => {
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // إرسال البيانات
    }).then(() => nav("/"));
  };

  return (
    <Box
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
      onSubmit={handleSubmit(sendData)} // استدعاء sendData عند الضغط على submit
    >
      <TextField
        {...register("title", {
          required: "Transaction Title is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        })}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        error={!!errors.title}
        helperText={errors.title?.message} // عرض رسالة الخطأ
      />

      <TextField
        {...register("price", {
          required: "Transaction Amount is required",
          min: { value: 1, message: "Amount must be greater than 0" },
          valueAsNumber: true, // تحويل المدخل لقيمة رقمية
        })}
        fullWidth
        label="Transaction Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        error={!!errors.price}
        helperText={errors.price?.message} // عرض رسالة الخطأ
        type="number"
      />

      <ColorButton
        type="submit"
        sx={{ mt: "22px", bgcolor: theme.palette.primary.main }}
        variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}

export default Create;
