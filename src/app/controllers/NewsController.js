class NewsControllers {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

// [GET] /news/:slug
show(req,res) {
    res.send('news details');
}

}



module.exports = new NewsControllers;

