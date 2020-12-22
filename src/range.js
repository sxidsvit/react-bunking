module.exports = (req, res, next) => {
  res.header('Content-Range', 'CardReaders 0-10/10')
  next()
}