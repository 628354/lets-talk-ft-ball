const leaguedatamodel = require("../model/leaguedata");
const csvtojson = require('csvtojson');

exports.importleaguedata = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Convert the CSV file to JSON
    const csvBuffer = req.file.buffer.toString('utf8');

    csvtojson()
      .fromString(csvBuffer)
      .then((jsonArrayObj) => {
        var army = [];
        for (var i = 0; i < jsonArrayObj.length; i++) {
          var obj = {};
          obj.league = req.body.league;
          obj.games = jsonArrayObj[i]['games'];
          obj.win = jsonArrayObj[i]['win'];
          army.push(obj);
        }
        console.log(army);

        leaguedatamodel.find({ league: req.body.league, games: { $in: army.map(item => item.games) } })
          .then((existingData) => {
            if (existingData.length === 0) {
              leaguedatamodel.insertMany(army)
                .then((data) => {
                  res.status(200).send({
                    message: "Successfully Uploaded!",
                    data: data
                  });
                })
                .catch((error) => {
                  res.status(500).send({
                    message: "Failure",
                    error: error
                  });
                });
            } else {
              res.status(200).send({
                message: "Data already exists in the database",
                data: existingData
              });
            }
          })
          .catch((error) => {
            res.status(500).send({
              message: "Database query error",
              error: error
            });
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Error converting CSV to JSON.');
      });
  } catch (error) {
    res.status(500).send({ status: false, message: "Something went wrong!" });
  }
}
