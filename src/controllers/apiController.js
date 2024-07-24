exports.getData = (req, res) => {
  console.log(req.body,'req.body')
    res.json({ message: 'Hello from the API' });
  };