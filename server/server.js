import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/admin.route.js";
import addBlogRouter from "./routes/blog.route.js";

const app = express();
await connectDB();

/* ---Middlewares--- */
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* ---Routes--- */
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/admin", adminRouter);
app.use("/api/blog", addBlogRouter);

/* ---Server--- */
app.listen(PORT, () => {
  console.log(`Server has been runing on the PORT ${PORT}`);
});

export default app;
