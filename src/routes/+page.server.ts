import { prisma } from '$/lib/prisma';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async () => {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (e) {
    throw error(500, '아 진짜...');
  }
};
