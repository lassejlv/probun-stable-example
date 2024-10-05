import type { Route } from 'probun';

export const GET = async (c: Route): Promise<Response> => {
  return c.json({ message: 'Hello, World!' });
};
