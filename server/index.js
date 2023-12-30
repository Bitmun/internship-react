const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

const authRouter = require("./routes/Auth");

app.use("/auth", authRouter);

const itemsRouter = require("./routes/Items");

app.use("/items", itemsRouter);
