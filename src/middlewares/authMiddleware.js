import passport from "passport";
import { Strategy as JwtStrategy } from "passport-jwt";
import User from "../models/User.js";

const cookieExtractor = (req) => {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }

  return token;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      console.log(jwt_payload)
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next(); 
  }

  return res.status(403).json({ message: 'Admin access required' });
};
export const authenticateJWT = passport.authenticate("jwt", { session: false });
