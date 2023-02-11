import { container } from 'tsyringe';

import { IDateProvider } from './dateProvider/IDateProvider';
import { DayjsDateProvider } from './dateProvider/implementations/dayjsDateProvider';
import { IMailProvider } from './mailProvider/IMailProvider';
import { EtherealMailProvider } from './mailProvider/implementations/etherealMailProvider';

container.registerSingleton<IDateProvider>('DateProvider', DayjsDateProvider);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);
