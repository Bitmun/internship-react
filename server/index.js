const express = require("express");

const app = express();
const cors = require("cors");

const PORT = 5000;
const cookieParser = require("cookie-parser");
const db = require("./models");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cookieParser());

app.use(express.json());

app.use(cors(corsOptions));

const authRouter = require("./routes/Auth");

app.use("/auth", authRouter);

const itemsRouter = require("./routes/Items");

app.use("/items", itemsRouter);

db.sequelize.sync().then(() => {
  console.log("db connected successfully");
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
