import express from "express";
import passport from "passport";
import { env } from "../config/index.js";
import authControllers from "../controllers/authControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/refresh", authControllers.refresh);
router.post("/login", authControllers.login);
router.post("/logout", authControllers.logout);
router.post("/signup", upload.single("profileImg"), authControllers.signup);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: env.CLIENT_URL,
  }),
  authControllers.socialCallback
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: env.CLIENT_URL,
  }),
  authControllers.socialCallback
);

export default router;
