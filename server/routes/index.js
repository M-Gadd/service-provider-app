const express = require("express");
const router = express.Router();
const { randomDate } = require("../middlewares");

router.post("/signup", (req, res, next) => {
  const { lastName, email, skills } = req.body;

  if (!lastName || !email || !skills) {
    res.status(400).json({ message: "not all fields are idicated" });
    return;
  }

  let requests = [];

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

module.exports = router;
