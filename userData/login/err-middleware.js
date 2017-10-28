module.exports = function(err, req, res, next) {
  res.status(401).send('Internal server error: ' + err);
};
