import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from "cors";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
import path from "path";


dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// app.use("/api/auth", authRoutes)
// app.use("/api/messages", messageRoutes)

console.log("Before /api/auth route");
app.use("/api/auth", authRoutes)

console.log("Before /api/messages route");
app.use("/api/messages", messageRoutes)

console.log("Finished setting routes");


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
      });
      
}


server.listen(PORT, ()=>{
    console.log("Server started at Port:", process.env.PORT);
    connectDB();
})