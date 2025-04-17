// app/api/todos/route.ts
import { connectToDatabase } from '../../../../lib/mongoose';
import Todo from '../../../../models/Todo';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  const todos = await Todo.find();
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectToDatabase();
  const newTodo = await Todo.create(data);
  return NextResponse.json(newTodo);
}
