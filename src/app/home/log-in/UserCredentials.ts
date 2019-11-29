export class UserCredentials{
    email: String;
    password: String;

    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    setEmail(email: string){
        this.email = email;
    }
    setPassword(password: string){
        this.password = password;
    }
}