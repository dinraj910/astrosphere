const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('✅ AstroSphere Server is Running 🚀');
})

mongoose.connect(process.env.MONGO_URI, {
}).then(() => app.listen(PORT, () =>
    console.log(`✅ Server is running on port http://localhost:${PORT} 🚀 and MongoDB connected successfully! ✅✅ `)
)).catch((err) => console.error(`�� Server Error: ${err} 🚨`));