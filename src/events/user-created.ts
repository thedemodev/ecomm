import { Event } from './event';

export const eventName = 'user-created';
export interface UserCreatedEvent extends Event {
  data: {
    id: string;
    email: string;
    role: 'user' | 'admin';
  };
}
