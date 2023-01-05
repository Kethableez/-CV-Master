import { Address } from './address.model';

export interface Contact {
  phoneNumber: string;
  email: string;
  address: Address;
  links: {
      github: string;
      linkedIn: string;
      other: string[];
  }
}
