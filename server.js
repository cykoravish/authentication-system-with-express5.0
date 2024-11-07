import express from "express";
import cors from "cors";
import { connectDb } from "./db.js";

const app = express();

try {
  connectDb();
  console.log("db connected!");
} catch (error) {
  console.log("error in db=> ", err);
  process.exit(1);
}

//inbuild middleware
app.use(express.json());
app.use(cors()); //third party middlewars

const reqLogger = (req, res, next) => {
  console.log(`method: ${req.method} url: ${req.url} ${new Date()}`);
  next();
};

// global middleware
// app.use(reqLogger);

app.get("/health", reqLogger, (req, res) => {
  res.send("Hey i am healthy");
  //   res.status(400).json({ name: "ravish" });
});

app.post("/api/users", (req, res) => {
  //   throw new Error("error occur in /api/users");
  console.log("body: ", req.body);
  res.json(req.body);
});

//error catching middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "something broke" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
