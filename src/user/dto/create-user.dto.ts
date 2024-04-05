import { IsAlphanumeric, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z@$!%*?&\d]{8,20}$/;

export class CreateUserDto {

    // name
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'ต้องมีความยาวของตัวอักษรอย่างน้อย 2 ตัว' })
    fullname: string;

    // age
    @IsNotEmpty()
    @IsInt()
    age: number;

    // email
    @IsNotEmpty()
    @IsEmail(null, { message: 'ต้องไม่เป็นค่าว่าง' }) 
    @IsString()
    email: string;

    // username
    @IsNotEmpty()
    @MinLength(3, { message: 'ต้องมีความยาวอย่างน้อย 3 ตัว' })
    @IsAlphanumeric(null, { message: 'ต้องเป็นตัวอักษรและตัวเลขเท่านั้น' })
    username: string;

    // password
    @IsNotEmpty()
    @IsString()
    @Matches(passwordRegex, { message: 'ต้องประกอบไปด้วยตัวอักษรและตัวเลข อย่างน้อย 8 ตัว' })
    password: string;

    // role
    @IsNotEmpty()
    @IsEnum(['USER','ADMIN','SUPER_ADMIN'])
    role: string;

    
    timestamp: Date;

}
