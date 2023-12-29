const mongoose = require("mongoose");
const { Schema } = mongoose;

const DataSchema = new Schema({
  productName: { type: String, required: true },
  image: { type: String, required: true },
  orderDetails: { type: String, required: true },
  store: { type: String, required: true },
  skuId: { type: String, required: true },
  currency: { type: String, required: true },
  unitPrice: { type: String, required: true },
  quantity: { type: String, required: true },
  totalPrice: { type: String, required: true },
  mode: { type: String, required: true },
  orderDate: { type: String, required: true },
  status: { type: String, required: true },
});

const virtual = DataSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
DataSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, res) {
    delete res._id;
  },
});

exports.Data = mongoose.model("Data", DataSchema);
