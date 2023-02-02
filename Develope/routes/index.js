const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
console.log("ko");
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;