import path from "path";
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import morgan from "morgan";
import cors from "cors";
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://e-commerce-app-youtube.vercel.app",
    "https://e-commerce-app-youtube-sl0624gjp-youbazs-projects.vercel.app","https://e-commerce-app-youtube-2ps5.vercel.app"
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type, Authorization"],
};
const port = process.env.PORT || 3000;
const app = express();
app.use(cors(corsOptions));
app.use(morgan("dev"));
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

app.get("/", (req, res) => {
  res.send({ message: "API is running..." });
});

// For Vercel serverless, we don't need app.listen()
// Vercel will handle the server startup
if (process.env.NODE_ENV !== 'production') {
  connectDB().then(() => {
    app.listen(port, function () {
      console.log(`Server is running on port: ${port}`);
    });
  }).catch(err => {
    console.error('Database connection failed:', err);
  });
} else {
  // For Vercel production
  connectDB().catch(err => {
    console.error('Database connection failed:', err);
  });
}

// Export for Vercel
export default app;
// cloudinary
// video rendering
