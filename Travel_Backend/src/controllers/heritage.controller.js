const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD HERITAGE PLACE
let addHeritage = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("heritage_places");

  let {
    city_id,
    name,
    description,
    history,
    ticket_price,
    lat,
    long,
    address,
    video_path,
    status,
  } = req.body;

  const image_path = req.files?.image_path
    ? req.files.image_path[0].filename
    : "";

  const gallery_images = req.files?.gallery_images
    ? req.files.gallery_images.map((f) => f.filename)
    : [];

  if (
    !city_id ||
    !name ||
    !description ||
    !history ||
    !ticket_price ||
    !lat ||
    !long ||
    !address ||
    !image_path ||
    gallery_images.length === 0 ||
    !video_path ||
    !status
  ) {
    return res.status(400).json({
      status: false,
      message: "All fields are required",
    });
  }

  let newHeritage = {
    _id: new ObjectId(),
    city_id: new ObjectId(city_id),
    name,
    description,
    history,
    ticket_price,
    lat: parseFloat(lat),
    long: parseFloat(long),
    address,
    image_path,
    gallery_images,
    video_path,
    status,
    created_at: new Date(),
  };

  await collection.insertOne(newHeritage);

  res.status(201).json({
    status: true,
    message: "Heritage Place Added Successfully",
  });
};

// 2. FETCH ALL HERITAGE PLACES
let fetchHeritage = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("heritage_places");
  let places = await collection.find({}).toArray();

  res.status(200).send({ status: true, data: places });
};

// 3. REMOVE HERITAGE PLACE
let removeHeritage = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("heritage_places");
  let { id } = req.params;

  let result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount === 0) {
    return res
      .status(404)
      .send({ status: false, message: "Heritage Place Not Found" });
  }

  res
    .status(200)
    .send({ status: true, message: "Heritage Place Removed Successfully" });
};

// 3. Update Heritage
let editHeritage = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("heritage_places");
  let { id } = req.params;
  console.log(req.body);

  let {
    city_id,
    name,
    description,
    history,
    ticket_price,
    lat,
    long,
    address,
    audio_path,
    video_path,
    status,
  } = req.body;

  const image_path = req.files?.image_path
    ? req.files.image_path[0].filename
    : "";
  const gallery_images = req.files?.gallery_images
    ? req.files.gallery_images.map((f) => f.filename)
    : [];

  let updateData = {};

  if (name) updateData.name = name;
  if (description) updateData.description = description;
  if (history) updateData.history = history;
  if (ticket_price) updateData.ticket_price = ticket_price;
  if (address) updateData.address = address;
  if (status) updateData.status = status;
  if (image_path) updateData.image_path = image_path;
  if (gallery_images) updateData.gallery_images = gallery_images;
  if (audio_path) updateData.audio_path = audio_path;
  if (video_path) updateData.video_path = video_path;
  if (lat) updateData.lat = parseFloat(lat);
  if (long) updateData.long = parseFloat(long);
  if (city_id) updateData.city_id = new ObjectId(city_id);

  let place = await collection.findOne({ _id: new ObjectId(id) });

  let existingGallery = place?.gallery_images || [];

  // 🔹 MERGE OLD + NEW GALLERY IMAGES
  if (gallery_images.length > 0) {
    updateData.gallery_images = [...existingGallery, ...gallery_images];
  }

  try {
    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return res
        .status(404)
        .send({ status: false, message: "Heritage Place Not Found" });
    }

    res
      .status(200)
      .send({ status: true, message: "Heritage Place Updated Successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};

// 4. HERITAGE Detail
let fetchHeritageById = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("heritage_places");
  let { id } = req.params;

  try {
    let place = await collection.findOne({ _id: new ObjectId(id) });

    if (!place) {
      return res
        .status(404)
        .send({ status: false, message: "Heritage Place Not Found" });
    }

    res.status(200).send({ status: true, data: place });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: "Invalid ID format or Server Error" });
  }
};

module.exports = {
  addHeritage,
  fetchHeritage,
  removeHeritage,
  editHeritage,
  fetchHeritageById,
};
