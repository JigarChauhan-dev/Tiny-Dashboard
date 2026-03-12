const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD HOTEL
let addHotel = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("hotels");

  let {
    city_id,
    hotel_name,
    address,
    contact_number,
    lat,
    long,
    price_range,
    status,
  } = req.body;

  const image_path = req.file ? req.file.filename : "";

  console.log(req.body);
  console.log(image_path);

  if (
    !city_id ||
    !hotel_name ||
    !address ||
    !contact_number ||
    !image_path ||
    !lat ||
    !long ||
    !price_range ||
    !status
  ) {
    return res.status(400).send({
      status: false,
      message: "All fields are required.",
    });
  }

  let newHotel = {
    _id: new ObjectId(),
    city_id: new ObjectId(city_id),
    hotel_name: hotel_name,
    address: address,
    contact_number: Number(contact_number),
    image_path: image_path,
    lat: parseFloat(lat),
    long: parseFloat(long),
    price_range: Number(price_range),
    status: status,
    created_at: new Date(),
  };

  await collection.insertOne(newHotel);
  res.status(201).send({ status: true, message: "Hotel Added Successfully" });
};

// 2. FETCH ALL HOTELS
const fetchHotels = async (req, res) => {
  try {
    const db = await connectDb();

    if (!db) {
      console.error("Database connection failed to return a DB object.");
      return res
        .status(500)
        .send({ status: false, message: "Database connection error" });
    }

    const collection = db.collection("hotels");

    const hotels = await collection.find({ status: "ACTIVE" }).toArray();

    res.status(200).send({
      status: true,
      data: hotels,
    });
  } catch (error) {
    console.error("fetchHotels Error:", error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};

let updateHotel = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ status: false, message: "Invalid Hotel ID" });
    }

    let updateData = { ...req.body };

    // correct field
    if (updateData.price_range) {
      updateData.price_range = Number(updateData.price_range);
    }

    // handle image
    if (req.file) {
      updateData.image_path = req.file.filename;
    }

    updateData.updated_at = new Date();

    let result = await db.collection("hotels").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ status: false, message: "Hotel not found" });
    }

    res.status(200).send({
      status: true,
      message: "Hotel updated successfully",
    });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// 4. DELETE HOTEL
let removeHotel = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid Hotel ID format" });
    }

    let result = await db
      .collection("hotels")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .send({ status: false, message: "Hotel not found" });
    }

    res
      .status(200)
      .send({ status: true, message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const fetchHotelById = async (req, res) => {
  try {
    const db = await connectDb();
    if (!db) {
      return res
        .status(500)
        .send({ status: false, message: "Database connection error" });
    }

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid Hotel ID format" });
    }

    const hotel = await db
      .collection("hotels")
      .findOne({ _id: new ObjectId(id) }); //

    if (!hotel) {
      return res
        .status(404)
        .send({ status: false, message: "Hotel not found" });
    }

    res.status(200).send({ status: true, data: hotel });
  } catch (error) {
    console.error("fetchHotelById Error:", error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  addHotel,
  fetchHotels,
  updateHotel,
  removeHotel,
  fetchHotelById,
};
