import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to cykos world");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
