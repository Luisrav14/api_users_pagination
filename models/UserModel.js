import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  estatus: {
    type: Boolean,
    required: true,
  },
  idCargo: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
