const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    pageTitle = process.env.nmp_package_description + ' - Travel';
    res.render('travel', { title: pageTitle, trips });
   };

   module.exports = {
    travel
   };