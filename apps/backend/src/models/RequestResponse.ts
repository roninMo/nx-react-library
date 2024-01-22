import { Address } from "./Address";
import { User } from "./User";

export interface CreateUserRequestPayload {
  user: User;
  address: Address;
}