const mongoose = require('mongoose');
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.fj4rg22.mongodb.net/backend`;

const connect = new Promise (async(resolve, reject) => {
    let conn = await mongoose.connect(URI);
    if(conn) resolve('Success conection to DB');
    reject('Error conection to DB');
})

module.exports = {
    connect
}

