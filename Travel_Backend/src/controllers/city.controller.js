const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD CITY
let addCity = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("cities");
  let { state_id, city_name, status } = req.body;

  if (!state_id || !city_name || !status) {
    return res.status(400).send({
      status: false,
      message: "All Fields (State ID, City Name, Status) Are Required..",
    });
  }

  let newCity = {
    _id: new ObjectId(),
    state_id: new ObjectId(state_id),
    city_name: city_name,
    status: status,
    created_at: new Date(),
  };

  await collection.insertOne(newCity);
  res.status(201).send({ status: true, message: "City Added Successfully" });
};

// 2. FETCH ALL CITIES
let fetchCity = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("cities");

  let cities = await collection.find({}).toArray();

  if (cities.length === 0) {
    return res.status(404).send({ status: false, message: "No Cities Found" });
  }

  res.status(200).send({ status: true, data: cities });
};

// 3. UPDATE CITY
let updateCity = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("cities");
  let { id } = req.params;
  let updateData = req.body;

  if (updateData.state_id) {
    updateData.state_id = new ObjectId(updateData.state_id);
  }

  let result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData },
  );

  if (result.matchedCount === 0) {
    return res.status(404).send({ status: false, message: "City Not Found" });
  }

  res.status(200).send({ status: true, message: "City Updated Successfully" });
};

// 4. REMOVE CITY
let removeCity = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("cities");
  let { id } = req.params;

  let result = await collection.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return res.status(404).send({ status: false, message: "City Not Found" });
  }

  res.status(200).send({ status: true, message: "City Removed Successfully" });
};



module.exports = { addCity, fetchCity, updateCity, removeCity };
