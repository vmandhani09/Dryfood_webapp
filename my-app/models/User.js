// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  mobile:    { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
  timestamps: true // Optional: adds createdAt and updatedAt
});

// ✅ Fix: Prevent model overwrite error in development
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
