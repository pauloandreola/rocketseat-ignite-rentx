import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcryptjs';

import createConnection from '@shared/infra/typeorm';
// import createConnection from '../index';

async function create() {
  const connection = createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) values('${id}', 'admin', 'admin@tentx.com.br', '${password}', 'true', 'now()', 'XXXXX')`,
  );
  await connection.close;
}

create().then(() => console.log('User admin create'));
