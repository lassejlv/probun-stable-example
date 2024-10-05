import type { Route } from 'probun';

export const GET = async (c: Route): Promise<Response> => {
  const id = c.params.id;

  return c.json({ message: `Hello, ${id}!` });
};
