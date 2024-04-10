import mongoose from "mongoose";
const task1Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
 
});

export default mongoose.model("Crypto", task1Schema)
