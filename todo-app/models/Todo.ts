import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
