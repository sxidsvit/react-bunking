module.exports = (req, res, next) => {
  res.header('Content-Range', 'CardReaders 0-10/10')
  res.header('Content-Range', 'CashAcceptor 0-5/10')
  next()
}