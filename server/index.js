import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
// import passportStrategy from "./passport.js";

import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import productRouter from './routes/productRouter.js'
dotenv.config();
const app = express();
app.use(cookieParser());

const port = 5000;
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.CLIENT_ID,
// 			clientSecret: process.env.CLIENT_SECRET,
// 			callbackURL: "/auth/google/callback",
// 			scope: ["profile", "email"],
// 		},
// 		function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
// 		}
// 	)
// );

// passport.serializeUser((user, done) => {
// 	done(null, user);
// });

// passport.deserializeUser((user, done) => {
// 	done(null, user);
// });

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: [process.env.BASE_URL,process.env.BASE_URL_TWO,process.env.DASH_URL],
//     credentials: true,
//   })
// );

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/products', productRouter);

// app.use(errorHandler);
// default error handling


// globale error handling middleware


// mongodb connection
mongoose
  .connect(process.env.CONNECT_STR)
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running ${port}`);
});
