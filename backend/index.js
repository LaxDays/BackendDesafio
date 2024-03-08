require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoDB = require('./src/database/database');
const userRoutes = require('./src/routes/usersRoutes.js');
const postsRoutes = require('./src/routes/postsRoutes.js');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postsRoutes);

mongoDB.connect.then((message) => {
    console.log(message)
    app.listen(port, () => {
        console.log("Server is listening on port", port);
    })
}).catch((error) => {
    console.log(error);
})

