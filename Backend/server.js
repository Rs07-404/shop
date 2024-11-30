import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express()
dotenv.config();
app.use(cors())
app.use(cookieParser())
const PORT = process.env.SERVER_PORT

app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})