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

module.exports = {
  randomDate,
};
