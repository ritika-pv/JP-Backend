const State = require("../models/stateModel");
const catchAsyncError = require("../middleware/catchAsyncError");

module.exports = {
  //Create States
  createState: catchAsyncError(async (req, res, next) => {
    const state = await State.create(req.body);
    res.status(201).json({ success: true, state });
  }),

  //Get States
  getStates: catchAsyncError(async (req, res, next) => {
    const states = await State.find()
      .sort({ name: 1 })
      .populate({ path: "cities", options: { sort: { name: 1 } } });
    res.status(200).json({ success: true, states });
  }),

  //get states by name
  getStateByName: catchAsyncError(async (req, res, next) => {
    const { stateName } = req.params;
    const sName = req.query.statename;
    let filter = {};
    if (sName) {
      filter["name"] = { $regex: ".*" + sName + ".*" };
    }
    const matchedState = await State.find(filter).populate({
      path: "cities",
      options: { sort: { name: 1 } },
    });
    if (matchedState.length == 0)
      return res
        .status(404)
        .json({ success: false, message: "No Match found " });
    else return res.status(200).json({ success: true, matchedState });
  }),
};

const states = [
  {
    name: "Andaman and Nicobar Islands",
  },
  {
    name: "Andhra Pradesh",
  },
  {
    name: "Arunachal Pradesh",
  },
  {
    name: "Assam",
  },
  {
    name: "Bihar",
  },
  {
    name: "Chandigarh",
  },
  {
    name: "Chhattisgarh",
  },
  {
    name: "Dadra and Nagar Haveli",
  },
  {
    name: "Daman and Diu",
  },
  {
    name: "Delhi",
  },
  {
    name: "Goa",
  },
  {
    name: "Gujarat",
  },
  {
    name: "Haryana",
  },
  {
    name: "Himachal Pradesh",
  },
  {
    name: "Jammu and Kashmir",
  },
  {
    name: "Jharkhand",
  },
  {
    name: "Karnataka",
  },
  {
    name: "Kerala",
  },
  {
    name: "Lakshadweep",
  },
  {
    name: "Madhya Pradesh",
  },
  {
    name: "Maharashtra",
  },
  {
    name: "Manipur",
  },
  {
    name: "Meghalaya",
  },
  {
    name: "Mizoram",
  },
  {
    name: "Nagaland",
  },
  {
    name: "Odisha",
  },
  {
    name: "Puducherry",
  },
  {
    name: "Punjab",
  },
  {
    name: "Rajasthan",
  },
  {
    name: "Sikkim",
  },
  {
    name: "Tamil Nadu",
  },
  {
    name: "Telangana",
  },
  {
    name: "Tripura",
  },
  {
    name: "Uttar Pradesh",
  },
  {
    name: "Uttarakhand",
  },
  {
    name: "West Bengal",
  },
];
