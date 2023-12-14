import mongoose from "mongoose";

const cargoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const CargoModel = mongoose.model("Cargo", cargoSchema);

export default CargoModel;
