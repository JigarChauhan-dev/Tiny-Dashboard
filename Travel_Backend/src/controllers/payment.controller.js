const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. ADD PAYMENT 
let addPayment = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("payments");
  let { user_id, subscription_id, amount, payment_mode } = req.body;

  if (!user_id || !subscription_id || !amount || !payment_mode) {
    return res.status(400).send({
      status: false,
      message: "User ID, Subscription ID, Amount, and Payment Mode are required.",
    });
  }

  let newPayment = {
    _id: new ObjectId(),           
    user_id: new ObjectId(user_id), 
    subscription_id: new ObjectId(subscription_id), 
    amount: Number(amount),        
    payment_date: new Date(),      
    payment_mode: payment_mode,    
    created_at: new Date(),        
  };

  await collection.insertOne(newPayment);
  res.status(201).send({ status: true, message: "Payment Recorded Successfully" });
};

// 2. FETCH ALL PAYMENTS 
let fetchPayments = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("payments");
  let payments = await collection.find({}).toArray();

  res.status(200).send({ status: true, data: payments });
};

// 3. UPDATE PAYMENT
let updatePayment = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("payments");
    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ status: false, message: "Invalid Payment ID" });
    }

    const { user_id, subscription_id, amount, payment_method, transaction_id, payment_status } = req.body;

    let updateData = {
      user_id: user_id ? new ObjectId(user_id) : undefined,
      subscription_id: subscription_id ? new ObjectId(subscription_id) : undefined,
      amount: Number(amount),
      payment_method,
      transaction_id,
      payment_status,
      updated_at: new Date()
    };

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ status: false, message: "Payment Record Not Found" });
    }

    res.status(200).send({ status: true, message: "Payment Updated Successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// 4. REMOVE PAYMENT
let removePayment = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("payments");
    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ status: false, message: "Invalid ID" });
    }

    let result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).send({ status: false, message: "Record Not Found" });
    }

    res.status(200).send({ status: true, message: "Payment Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addPayment, fetchPayments, updatePayment, removePayment };