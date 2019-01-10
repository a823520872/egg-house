'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const HouseSchema = new Schema({
    name: { type: String },
    address: { type: String },
    facities: { type: String },
    rent: { type: String },
    remark: { type: String },
    t_id: { type: ObjectId },
    rented: { type: Boolean, default: false },
  });

  HouseSchema.index({ master_id: 1, has_read: -1, create_at: -1 });

  return mongoose.model('House', HouseSchema);
};
