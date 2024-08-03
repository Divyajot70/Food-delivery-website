import express from "express"
import cors from "cors"

import foodRouter from "./routes/foodRoute.js"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



//app config
const app = express()
const port = process.env.PORT || 4001;


const corsOptions = {
  origin: 'https://food-delivery-website-roan.vercel.app', // Your Vercel frontend URL
  optionsSuccessStatus: 200
};
//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})



// import express from "express";
// import cors from "cors";

// import foodRouter from "../routes/foodRoute.js";
// import { connectDB } from "../config/db.js";
// import userRouter from "../routes/userRoute.js";
// import cartRouter from "../routes/cartRoute.js";
// import orderRouter from "../routes/orderRoute.js";
// import 'dotenv/config';

// const app = express();
// const port = process.env.PORT || 4001;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // DB connection
// connectDB();

// // API endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads'));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//     res.send("API Working");
// });

// // Export the serverless function
// export default (req, res) => {
//     app(req, res);
// };
