import User from "../models/user.mjs";
import { hashPassword, comparePassword } from "../bcrypt/bAuth.mjs";

// Sign UP
export const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username) {
    return res.status(400).json({ error: "Username is requires" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is requires" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is requires" });
  }
  try {
    const hashed = await hashPassword(password);
    const user = new User({
      username,
      email,
      password: hashed,
    });
    await user.save();
    user.password = undefined;
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

// Login
export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Wrong input" });
    }
    const comparePass = await comparePassword(password, user.password);
    if (!comparePass) {
      return res.status(401).json({ error: "Bad authentication" });
    }
    // const { password, ...others } = user._doc;
    user.password = undefined;
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
