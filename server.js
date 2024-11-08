import express from "express";
import cors from "cors";
import { connectDb } from "./src/config/db.js";
import userRouter from "./src/user/user.route.js";
import helmet from "helmet";

const app = express();

try {
  connectDb();
  console.log("db connected!");
} catch (error) {
  console.log("error in db=> ", err);
  process.exit(1);
}

//inbuild middlewares
// app.use(express.static("public"));  //http://localhost:4000
app.use("/static", express.static("public")); //http://localhost:4000/static/
app.use(express.json());
app.use(cors()); //third party middlewars
app.use(helmet()); //for security

const reqLogger = (req, res, next) => {
  console.log(`method: ${req.method} url: ${req.url} ${new Date()}`);
  next();
};

// global middleware
app.use(reqLogger);


app.use("/api/users", userRouter); //register route

app.get("/health", (req, res) => {
  res.send("Hey i am healthy");
  //   res.status(400).json({ name: "ravish" });
});

//error catching middleware
app.use((err, req, res, next) => {
  console.log("err:", err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
