const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. Add Booking
let addBooking = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("bookings");

    let { loginId, heritageId, date, reason } = req.body;

    if (!loginId || !heritageId || !date || !reason) {
      return res.status(400).send({
        status: false,
        message: "All fields are required.",
      });
    }

    let newBooking = {
      loginId: ObjectId.createFromHexString(loginId),
      heritageId: ObjectId.createFromHexString(heritageId),
      Date: new Date(date),
      reason: reason,
      status: "PENDING",
    };

    await collection.insertOne(newBooking);
    res.status(201).send({
      status: true,
      message: "Heritage Requested Successfully!",
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// 2. Fetch Bookings
let fetchBookings = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("bookings");

    const userdata = req.user;

    let bookings = await collection

      .aggregate([
        // 🔹 Heritage lookup
        {
        $match: {
          loginId: new ObjectId(userdata.id),
        },
      },
        {
          $lookup: {
            from: "heritage_places",
            localField: "heritageId",
            foreignField: "_id",
            as: "heritageDetails",
          },
        },
        {
          $unwind: {
            path: "$heritageDetails",
            preserveNullAndEmptyArrays: true,
          },
        },

        // 🔹 User lookup
        {
          $lookup: {
            from: "users",
            localField: "loginId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true,
          },
        },

        // 🔹 Project required fields
        {
          $project: {
            loginId: 1,
            Date: 1,
            status: 1,
            reason: 1,

            heritage_name: "$heritageDetails.name",
            heritage_price: "$heritageDetails.ticket_price",

            user_name: "$userDetails.username",
            user_email: "$userDetails.email",
          },
        },
      ])
      .toArray();


    res.status(200).send({ status: true, data: bookings });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// All booking
let fetchAllBookings = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("bookings");

    let bookings = await collection

      .aggregate([
        // 🔹 Heritage lookup
        
        {
          $lookup: {
            from: "heritage_places",
            localField: "heritageId",
            foreignField: "_id",
            as: "heritageDetails",
          },
        },
        {
          $unwind: {
            path: "$heritageDetails",
            preserveNullAndEmptyArrays: true,
          },
        },

        // 🔹 User lookup
        {
          $lookup: {
            from: "users",
            localField: "loginId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true,
          },
        },

        // 🔹 Project required fields
        {
          $project: {
            loginId: 1,
            Date: 1,
            status: 1,
            reason: 1,

            heritage_name: "$heritageDetails.name",
            heritage_price: "$heritageDetails.ticket_price",

            user_name: "$userDetails.username",
            user_email: "$userDetails.email",
          },
        },
      ])
      .toArray();

    res.status(200).send({ status: true, data: bookings });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};



// 3. Remove Booking
let removeBooking = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;

    await db.collection("bookings").deleteOne({ _id: new ObjectId(id) });

    res
      .status(200)
      .send({ status: true, message: "Booking Request Cancelled" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

let UpdateBookingStatus = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("bookings");

    const { id } = req.params;
    const { status } = req.body;

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } },
    );

    res.send({
      status: true,
      message: "Booking status updated",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Error updating status",
    });
  }
};

module.exports = {
  addBooking,
  fetchBookings,
  fetchAllBookings,
  removeBooking,
  UpdateBookingStatus,
};
