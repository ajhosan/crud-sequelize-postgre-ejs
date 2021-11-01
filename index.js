require("dotenv").config();

const express = require("express");
const userRouter = require("./routes/route");
const sequelize = require("./models/sequelize");
const Swal = require('sweetalert2')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs");

app.use(userRouter);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use((err, req, res, next) => {
  console.log(err);
  const { message, code = 500, error = "internal server error" } = err;

  return res.status(code).json({
    message,
    code,
    error,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server load with port : ${PORT}`);
});