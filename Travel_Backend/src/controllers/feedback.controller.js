const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD FEEDBACK
let addFeedback = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("feedbacks");
  let { loginId, username, email, rating, message } = req.body;

  if (!loginId || !username || !email || !rating || !message) {
    return res.status(400).send({
      status: false,
      message: "All Fields are required.",
    });
  }

  let newFeedback = {
    loginId: ObjectId.createFromHexString(loginId),
    username: username,
    email: email,
    rating: Number(rating),
    message: message,
    createdAt: new Date(),
  };

  await collection.insertOne(newFeedback);
  res
    .status(201)
    .send({ status: true, message: "Feedback Submitted Successfully!" });
};

// 2. FETCH FEEDBACK
let fetchFeedbacks = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("feedbacks");

  let feedbacks = await collection.find({}).sort({ created_at: -1 }).toArray();

  res.status(200).send({ status: true, data: feedbacks });
};

// 3. UPDATE FEEDBACK
let updateFeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;
    let { status } = req.body;

    await db
      .collection("feedbacks")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { status, updated_at: new Date() } },
      );

    res.status(200).send({ status: true, message: "Feedback Status" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// 4. REMOVE FEEDBACK
let removeFeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;
    await db.collection("feedbacks").deleteOne({ _id: new ObjectId(id) });
    res.status(200).send({ status: true, message: "Feedback Deleted" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addFeedback,
  fetchFeedbacks,
  updateFeedback,
  removeFeedback,
};
