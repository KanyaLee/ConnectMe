const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

//MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

//import route
app.get('/', (req,res) => {
    res.send('From the Backend')
});

const habitsRoutes = require('./routes/habits');
const usersRoutes = require('./routes/users');
app.use("/api/habits", habitsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const usersRoutes = require('./routes/users');
app.use("/api/users", usersRoutes);

