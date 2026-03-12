const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD USER SUBSCRIPTION
let addUserSubscription = async (req, res) => {
  let db = await connectDb();
  let plancollection = db.collection("subscription_plans");
  let collection = db.collection("user_subscriptions");
  let { user_id, plan_id, status } = req.body;

  if (!user_id || !plan_id || !status) {
    return res.status(400).send({
      status: false,
      message: "All fields (User ID, Plan ID, Duration, Status) are required.",
    });
  }
  console.log(plan_id);

  var plandata = await plancollection.findOne({
    _id: ObjectId.createFromHexString(plan_id),
  });
  console.log(plandata.duration_days);

  let startDate = new Date();
  let endDate = new Date();
  endDate.setDate(startDate.getDate() + Number(plandata.duration_days));

  console.log(endDate);

  let newSubscription = {
    _id: new ObjectId(),
    user_id: new ObjectId(user_id),
    plan_id: new ObjectId(plan_id),
    start_date: startDate,
    end_date: endDate,
    status: status,
    created_at: new Date(),
  };

  await collection.insertOne(newSubscription);
  res
    .status(201)
    .send({ status: true, message: "User Subscribed Successfully" });
};

// 2. FETCH SUBSCRIPTIONS
let fetchUserSubscriptions = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("user_subscriptions");

  let subscriptions = await collection
    .aggregate([
      {
        $lookup: {
          from: "subscription_plans",
          localField: "plan_id",
          foreignField: "_id",
          as: "plan_details",
        },
      },
    ])
    .toArray();

  res.status(200).send({ status: true, data: subscriptions });
};

// 3. UPDATE USER SUBSCRIPTION
let updateSub = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;
    let updateData = req.body;

    delete updateData._id;

    let result = await db
      .collection("user_subscriptions")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    res.status(200).send({ status: true, message: "Success" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

//  4. REMOVE USER SUBSCRIPTION
let removeUserSubscription = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("user_subscriptions");
  let { id } = req.params;

  let result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount === 0) {
    return res.status(404).send({ status: false, message: "Record Not Found" });
  }

  res
    .status(200)
    .send({ status: true, message: "Subscription Removed Successfully" });
};

module.exports = {
  addUserSubscription,
  fetchUserSubscriptions,
  updateSub,
  removeUserSubscription,
};
