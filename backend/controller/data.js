const { Data } = require("../model/data");

exports.createData = async (req, res) => {
  const newBrand = new Data(req.body);
  try {
    const doc = await newBrand.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllData = async (req, res) => {
  try {
    const {status} = req.query;
    const query = status && status !== "all" ? {status}  : {};
    const docs = await Data.find(query).exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Data.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
