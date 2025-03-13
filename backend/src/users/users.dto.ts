export class CreateUsersDto {
  name: string;
  email: string;
  password: string;
}

export type TUpdateUsersDto = Partial<CreateUsersDto>;
