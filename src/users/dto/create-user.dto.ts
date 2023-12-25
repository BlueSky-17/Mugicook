export class CreateUserDto {
    name: string = "";
    email: string = "";
    phoneNumber: string = "";
    description: string = "";
    password: string = "";
    favoriteRecipes: string[] = [];
    role: string = "";
}
