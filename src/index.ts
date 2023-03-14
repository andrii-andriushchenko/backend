import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Express App with Typescript</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
