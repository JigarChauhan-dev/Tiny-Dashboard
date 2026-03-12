let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");
let key = process.env.KEY;

let Signup = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");
    let { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res
        .status(404)
        .send({ status: false, message: "All Fields Are Required.." });
    }

    let existuser = await collection.findOne({ $or: [{ email }, { phone }] });

    if (existuser) {
      return res
        .status(404)
        .send({ status: false, message: "This member already exists." });
    }

    let securePassword = await bcrypt.hash(password, 10);

    let insertUser = await collection.insertOne({
      _id: new ObjectId(),
      username: username,
      email: email,
      phone: phone,
      password: securePassword,
      role: "user",
      status: true,
    });

    if (insertUser.acknowledged) {
      return res
        .status(201)
        .send({ status: true, message: "Signup Successfully" });
    }
  } catch (error) {
    return res.status(500).send({ status: true, message: "server error." });
  }
};

let Login = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("users");
  let { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .send({ status: false, message: "All Fields Are Required.." });
  }

  let member = await collection.findOne({ email });
  console.log(member);

  if (!member) {
    return res.status(401).send({ status: false, message: "Member not found" });
  }

  let isMathed = await bcrypt.compare(password, member.password);

  if (!isMathed) {
    return res.status(401).send({ status: false, message: "Invalid Password" });
  }

  let data = {
    id: member._id,
    name: member.username,
    email: member.email,
    role: member.role,
  };

  let token = jwt.sign(data, key, { expiresIn: "5h" });
  console.log(token);
  res
    .status(200)
    .send({ status: true, message: "Login Successfully", token: token });
};

module.exports = { Login, Signup };