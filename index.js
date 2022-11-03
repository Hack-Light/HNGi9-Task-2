const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    slackUsername: "Light",
    backend: true,
    age: 23,
    bio: "I am a software developer, who strives to be the best at what I do. I am a team player and I am always willing to learn new things. I am a fast learner and I am always willing to help others.",
  });
});

app.post("/", (req, res) => {
  let { operation_type, x, y } = req.body;
  let result;

  //   operations object
  let operation = {
    adddition: x + y,
    subtraction: x - y,
    multiplication: x * y,
    division: x / y,
  };

  //   additon: x + y,
  if (
    operation_type.includes("add") ||
    operation_type.includes("sum") ||
    operation_type.includes("plus") ||
    operation_type.includes("+")
  ) {
    result = operation.adddition;
    operation_type = "addition";
  }

  //   subtraction: x - y,
  if (
    operation_type.includes("subtract") ||
    operation_type.includes("minus") ||
    operation_type.includes("-") ||
    operation_type.includes("less")
  ) {
    result = operation.subtraction;
    operation_type = "subtraction";
  }

  //   multiplication: x * y,
  if (
    operation_type.includes("multiply") ||
    operation_type.includes("*") ||
    operation_type.includes("times")
  ) {
    result = operation.multiplication;
    operation_type = "multiplication";
  }

  //   division: x / y,
  if (
    operation_type.includes("divide") ||
    operation_type.includes("/") ||
    operation_type.includes("by")
  ) {
    result = operation.division;
    operation_type = "division";
  }

  res.setHeader("Content-Type", "application/json").json({
    slackUsername: "Light",
    operation_type: operation_type,
    result: result,
  });
});

app.listen(port, () => {
  console.log(`[stdout]: Server is up on port ${port}`);
});
