const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/your_db_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = mongoose.connection;