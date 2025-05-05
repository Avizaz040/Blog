require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose'); // no need to use `.default`

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB
(async function connect() {
    const uri = process.env.MONGO_URL;

    if (!uri) {
        console.error('❌ MONGO_URL is not defined in .env!');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri, {
            dbName: 'Blog'
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
    }
})();

app.use('/auth', authRoutes);
app.use('/user', userRoute);

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
