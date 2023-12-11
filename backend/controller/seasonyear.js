const seasonyearmodel = require("../model/seasonyear");

exports.addleagueyear = async (req, res) => {
  try {
    const { teamsId, teamdataId, season_Title, status, sort_Order } = req.body;
    const find = await seasonyearmodel.findOne({ season_Title: season_Title });
    if (find) {
      res.send({ status: false, message: "season allready added" });
      return;
    }

    const addleagueyear = await seasonyearmodel.create({
      teamsId: teamsId,
      teamdataId: teamdataId,
      season_Title: season_Title,
      sort_Order: sort_Order,
      status: status,
    });

    res.send({
      status: true,
      message: "Successfully add seasonyear",
      seasonyears: addleagueyear,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getyears = async (req, res) => {
  try {
    const getyears = await seasonyearmodel.find().sort({ season_Title: -1 });
    res.send({
      status: true,
      message: "Successfully get seasonyears",
      seasonyears: getyears,
    });
  } catch (error) {
    res.send({ status: false, message: "Something went wrong !!" });
  }
};

exports.getById = async (req, res) => {
  try {
    const getById = await seasonyearmodel.findById({ _id: req.params.id });
    if (getById) {
      res.send({
        status: true,
        message: "Successfully get seasonyear data",
        body: getById,
      });
    } else {
      res.send({ status: false, message: "season Id not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateyears = async (req, res) => {
  try {
    const { season_Title, status, sort_Order } = req.body;
    const updateyears = await seasonyearmodel.findByIdAndUpdate(
      req.params.yearId,
      {
        season_Title: season_Title,
        sort_Order: sort_Order,
        status: status,
      },
      { new: true }
    );

    await updateyears.save();
    res.send({
      status: true,
      message: "Successfully update details",
      seasonyear: updateyears,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.removeyear = async (req, res) => {
  try {
    const remove = await seasonyearmodel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (remove) {
      res.send(200).send({
        body: remove,
        message: "seasonyear Deleted Sucessfully",
      });
    } else {
      res.status(300).send({
        message: "seasonId not found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
exports.getsessonYear = async (req, res) => {
  try {
    const { season_Title } = req.query;
    const season_Filter = {};
    if (season_Title) {
      season_Filter.season_Title = new RegExp(season_Title, 'i');
    }
    const seasonyear = await seasonyearmodel.aggregate([
      {
        $match: season_Filter,
      },
      {
        $lookup: {
          from: 'teams',
          localField: 'teamsId',
          foreignField: '_id',
          as: 'teams_details',
        },
      },
      {
        $lookup: {
          from: 'teamdatas',
          localField: 'teamdataId',
          foreignField: "_id",
          as: "teamdata_details"
        }

      },
      {
        $sort: {
          createdAt: -1,
        },
      },

    ]);

    res.status(200).send({
      body: seasonyear,
      message: `Get Data for Season ${season_Title || 'All Seasons'} Successfully`,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: 'Internal Server Error',
      success: false,
    });
  }
};