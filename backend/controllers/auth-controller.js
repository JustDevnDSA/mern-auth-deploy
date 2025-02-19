const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists, please login",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userModel = new UserModel({ name, email, password: hashedPassword });
    // userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    res.status(201).json({ message: "Signup successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Auth failed  email or password is wrong";
    if (!user) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { signUp, login };
