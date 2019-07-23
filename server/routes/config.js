app.listen(config.PORT, function () {
    console.log('Server is running on Port:', config.PORT)
});

module.exports = {
    PORT: 8000,
    DB: 'mongodb://localhost:27017/mernapp',
};