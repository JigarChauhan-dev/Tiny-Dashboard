const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

// 1. FETCH ALL USERS
let fetchAllUsers = async (req, res) => {
  try {
    let db = await connectDb();
    let users = await db.collection("users").find({}).toArray();
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// 2. ADD USER
let addUser = async (req, res) => {
  try {
    let db = await connectDb();
    const { name, email, role, status } = req.body;
    await db.collection("users").insertOne({
      name, email, 
      role: role || "user", 
      status: status || "ACTIVE",
      created_at: new Date()
    });
    
    res.status(201).json({ status: true, message: "User Created" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// 3. UPDATE USER 
let updateUser = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("users");

    let { id } = req.params;
    console.log("userID:", id);

    let { username, email } = req.body;   

    // if (!ObjectId.isValid(id)) {
    //   return res.status(400).json({
    //     status: false,
    //     message: "Invalid User ID"
    //   });
    // }

    let updateQuery = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          username: username,
          email: email,
        }
      }
    );


    console.log("updatedData:", updateQuery);

    if (updateQuery.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "User Updated Successfully",
    });

  // } catch (e) {
  //   console.log(e);
  //   return res.status(500).json({
  //     status: false,
  //     message: "Internal Server Error",
  //   });
  // }
};

// 4. REMOVE USER 
let removeUser = async (req, res) => {
  try {
    let db = await connectDb();
    let { id } = req.params;
    await db.collection("users").deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({ status: true, message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { fetchAllUsers, addUser, updateUser, removeUser };