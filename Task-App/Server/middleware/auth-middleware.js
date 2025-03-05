const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userVerification = async (req, res, next) => {
  const accessToken = req.cookies.AccessToken;
  const refreshToken = req.cookies.RefreshToken;

  if (!accessToken) {
    return res.status(401).json({ success: false, message: "User Not Unauthorized..." });
  }

  try {
    
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ success: false, message: "User Not Unauthorized" });
    }

    req.user = user; // Attach the user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Token verification error:", err);
    if(err.name === 'TokenExpiredError' && refreshToken){
      console.log('Token Expired', refreshToken);
      
      try{
        const decodedRefresh = jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decodedRefresh.id);

        if(!user){
          return res.status(401).json({success: false, message: "User Not Unathorized"});
        }

        const newAccessToken = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
          expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.cookie("AccessToken",newAccessToken,{
          withCredentials: true,
          httpOnly: true,
        })

        req.user = user;
        next();
      }catch(refreshErr){
        console.error("Refresh token error:", refreshErr);
        return res.status(401).json({ success: false, message: "User Not Unauthorized" });
      }
    }
    else{
      console.error("Token verification error:", err);
      return res.status(401).json({ success: false, message: "User Not Unauthorized" });
    }
  }
};

module.exports = userVerification;