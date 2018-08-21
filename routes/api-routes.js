module.exports = (app)=> {
    app.post('/api/email', function(req, res, next) {
        console.log(req.body.email);
        res.send('it works');
    })
};