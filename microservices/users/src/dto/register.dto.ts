import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @Length(8)
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}
