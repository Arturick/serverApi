const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routers/router');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
        origin: "*"
}));
app.use('/', router);

app.listen(PORT, async () => {
    console.log(`Server running at ${PORT}`);

    try {
        return await mongoose.connect(config.DB_URI);
    } catch (err){
        console.log(`connecting error: ${err}`);
    }
})
