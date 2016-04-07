/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

//$('#calendar').fullCalendar({
//        // put your options and callbacks here
//    })
