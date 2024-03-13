import Fastify, { FastifyInstance } from "fastify";

const server: FastifyInstance = Fastify();

server.get('/hello-world', () => {
  return 'Hello World!!!';
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1)
  }
}

start();
 