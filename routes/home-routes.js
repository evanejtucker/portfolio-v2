
module.exports = (app)=> {
    app.get('/', (req, res, next)=> {
        res.render('about');
    });

    app.get('/about', (req, res, next)=> {
        res.render('about');
    });

    app.get('/portfolio', (req, res, next)=> {
        res.render('portfolio');
    });

    app.get('/contact', (req, res, next)=> {
        res.render('contact');
    });
};