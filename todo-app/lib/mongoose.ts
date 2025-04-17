import mongoose from 'mongoose';

export async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/TODO');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}
