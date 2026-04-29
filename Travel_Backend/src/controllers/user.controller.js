import { ObjectId } from "mongodb";
import { connectDB } from "../config/connection";

const Profile = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    const userId = req.user?.id;

    if (!userId || !ObjectId.isValid(userId)) {
      return res.status(400).json({
        status: false,
        message: "Invalid User ID",
      });
    }

    const user = await collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } },
    );

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Profile Found",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error. Please try again later",
    });
  }
};

export default Profile;
