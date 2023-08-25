require("dotenv").config();
const expres = require("express")
const app = expres();
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const cors = require("cors")
const connection = require("./db/connection.js")
const router = require("./routes/web.js");
connection(DB_URL);


app.use(cors())
app.use(expres.json());
app.use(expres.static('uploads'));
app.use(expres.urlencoded({extended:true}));
app.use("/api",router);
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/api`)
})