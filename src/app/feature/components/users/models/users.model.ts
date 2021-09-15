import { Adress } from "./adress.model";
import { Company } from "./company.model";

export class Users{
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: number;
  website: number;
  company: Company;
}
