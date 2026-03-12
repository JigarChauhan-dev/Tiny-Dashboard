const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection"); // ✅ add this

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body; // ✅ match frontend

    if (!token || !password) {
        console.log("token:", token);
        console.log(password);
      return res.status(400).send({
        status: false,
        message: "Token and new password required",
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.KEY);

    const db = await connectDb();
    const collection = db.collection("users");

    const hashedPassword = await bcrypt.hash(password, 10);

    await collection.updateOne(
      { _id: new ObjectId(decoded.id) },
      { $set: { password: hashedPassword } }
    );

    return res.status(200).send({
      status: true,
      message: "Password reset successfully",
    });

  } catch (error) {
    console.log(error);
    return res.status(400).send({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { resetPassword };