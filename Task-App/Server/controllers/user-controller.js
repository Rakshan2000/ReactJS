const joi = require("joi");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const generateToken = (id, secret, expiresIn) => {
  return jwt.sign({ id }, secret, {
    expiresIn: expiresIn,
  });
};

const registerUser = async (req, res, next) => {

  const { name, email, password } = req.body;

  const { error } = registerSchema.validate({
    name,
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        Success: false,
        message: "User already exists",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      if (newUser) {
        const accessToken = generateToken(newUser._id, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
        const refreshToken = generateToken(newUser._id, process.env.JWT_REFRESH_SECRET, process.env.JWT_REFRESH_TOKEN_EXPIRES_IN);

        res.cookie("AccessToken", accessToken, {
          withCredentials: true,
          httpOnly: false,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        });

        res.cookie("RefreshToken", refreshToken, {
          withCredentials: true,
          httpOnly: true,
        });

        res.status(201).json({
          Success: true,
          message: "User registered successfully",
          userData: {
            name: newUser.name,
            email: newUser.email,
            _id: newUser._id,
          },
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {

  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        Success: false,
        message: 'User not found. Please register...',
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        Success: false,
        message: 'Invalid Password / Wrong Email. Please try again...',
      });
    }

    const accessToken = generateToken(user._id, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
    const refreshToken = generateToken(user._id, process.env.JWT_REFRESH_SECRET, process.env.JWT_REFRESH_TOKEN_EXPIRES_IN);

    res.cookie("AccessToken", accessToken, {
      withCredentials: true,
      httpOnly: false,
    });

    res.cookie("RefreshToken", refreshToken, {
      withCredentials: true,
      httpOnly: true,
    });

    res.status(200).json({
      Success: true,
      message: 'User logged in successfully',
      userData: {
        name: user.name,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

const logoutUser = (req, res) => {
  res.cookie("AccessToken", "", {
    expires: new Date(0),
    httpOnly: true,
    withCredentials: true,
  });
  res.cookie("RefreshToken", "", {
    expires: new Date(0),
    httpOnly: true,
    withCredentials: true,
  });
  res.status(200).json({
    Success: true,
    message: "User logged out successfully",
  });
};

module.exports = { registerUser, loginUser, logoutUser };
