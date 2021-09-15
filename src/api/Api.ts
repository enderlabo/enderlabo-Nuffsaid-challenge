import { Priority, IMessage } from '../context/types';

import random from 'lodash/random';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';


const observable = new Observable<IMessage>((subscriber) => {
  const generate = () => {
    const messages = faker.lorem.sentence();
    const priority = random(0, 2) as Priority;
    const nextInMS = random(500, 3000);
    const id = uuidv4();
    subscriber.next({ messages, priority, id });
    setTimeout(generate, nextInMS);
  };
  generate();
});

export const subscribe = (callback: (message: IMessage) => void) => {
  const subscription = observable.subscribe({
    next: callback,
  });
  return () => subscription.unsubscribe();
};

// export default subscribe


