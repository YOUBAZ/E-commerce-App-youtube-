import path from "path";
import express from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import morgan from "morgan";

const port = process.env.PORT || 3000;
const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));


app.listen(port, function () {
  connectDB();
  console.log(`Server is running on port: ${port}`);
});
// cloudinary
// video rendering