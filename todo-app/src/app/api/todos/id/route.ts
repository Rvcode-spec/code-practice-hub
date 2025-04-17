import { connectToDatabase } from '../../../../../lib/mongoose';
import Todo from '../../../../../models/Todo';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  await Todo.findByIdAndDelete(params.id);
  return Response.json({ message: 'Deleted' });
}
