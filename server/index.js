// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith("http://localhost:"));
    },
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, "../client/build")));

app.post("/api/signup", (req, res, next) => {
  const { lastName, email, skills } = req.body;

  if (!lastName || !email || !skills) {
    res.status(400).json({ message: "not all fields are idicated" });
    return;
  }

  let requests = [];

  function randomDate() {
    let start = new Date();
    let end = new Date();
    end.setMonth(end.getMonth() + 2);
    let startingDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    let endingDate = new Date(
      startingDate.getFullYear(),
      startingDate.getMonth() + Math.floor(Math.random() * 5),
      startingDate.getDate() + Math.floor(Math.random() * 10),
    );

    return { startingDate, endingDate };
  }

  for (let i = 0; i < 5; i++) {
    let startDate =
      i === 4
        ? requests[Math.floor(Math.random() * requests.length)].startDate
        : randomDate().startingDate;

    let endDate = randomDate().endingDate;

    while (
      Math.round(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) <=
      1
    ) {
      endDate = randomDate().endingDate;
    }

    let request = {
      client: `Client ${i + 1}`,
      lastName: lastName,
      email: email,
      startDate: startDate,
      endDate: endDate,
      skillRequired: skills[Math.floor(Math.random() * skills.length)].skill,
      message: `we have a job offer for you related to your current skills and we would be happy to work with you`,
    };

    requests.push(request);
  }

  res.json({ requests });
});

app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// For any other routes, redirect to the index.html file of React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(process.env.PORT || 5000, (err) => {
  console.log("Listening");
});
