export class CreateUsersDto {
  name: string;
  email: string;
  password: number;
}

export type TUpdateUsersDto = Partial<CreateUsersDto>;
