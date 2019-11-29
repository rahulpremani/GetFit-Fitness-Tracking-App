export class newCredentials{
    email: string;
    answer: string;
    newPassword: string;

    getEmail(){
        return this.email;
    }
    getAnswer(){
        return this.answer;
    }
    getNewPassword(){
        return this.newPassword;
    }
    setEmail(email: string){
        this.email = email;
    }
    setAnswer(answer: string){
        this.answer = answer;
    }
    setNewPassword(newPassword: string){
        this.newPassword = newPassword;
    }
}