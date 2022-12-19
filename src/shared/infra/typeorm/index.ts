import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// Removido pela Dani no capítulo IV - Carros - Creiando seed de usuário
// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'database';
//   createConnection({ ...options });
// });

export default async (host: 'localhost'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
    }),
  );
};
