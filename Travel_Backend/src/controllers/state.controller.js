const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD STATE
let addState = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("states");
  let { country_id, state_name, status } = req.body;

  if (!state_name || !status) {
    return res.status(400).send({
      status: false,
      message: "All Fields Are Required..",
    });
  }

  let newState = {
    _id: new ObjectId(),
    state_name: state_name,
    status: status,
    created_at: new Date(),
  };

  await collection.insertOne(newState);
  res.status(201).send({ status: true, message: "State Added Successfully" });
};

// 2. FETCH ALL STATES
let fetchState = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("states");

  let states = await collection.find({}).toArray();

  if (states.length === 0) {
    return res.status(404).send({ status: false, message: "No States Found" });
  }

  res.status(200).send({ status: true, data: states });
};

// 3. UPDATE STATE
let updateState = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("states");
  let { id } = req.params;
  let updateData = req.body;

  let result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData },
  );

  if (result.matchedCount === 0) {
    return res.status(404).send({ status: false, message: "State Not Found" });
  }

  res.status(200).send({ status: true, message: "State Updated Successfully" });
};

// 4. REMOVE STATE
let removeState = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("states");
  let { id } = req.params;

  let result = await collection.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return res.status(404).send({ status: false, message: "State Not Found" });
  }

  res.status(200).send({ status: true, message: "State Removed Successfully" });
};

module.exports = { addState, fetchState, updateState, removeState };
