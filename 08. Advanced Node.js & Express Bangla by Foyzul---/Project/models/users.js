import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  createdAt: { type: Date, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;
