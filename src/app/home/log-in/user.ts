export class User{
    email: string;
    fullName: string;
    mobileNumber: string;
    password: string;
    gender: string;
    dateOfBirth: string;
    subscriptionType: string;
    weight: number;
    height: number;
    securityQuestion: string;
    answer: string;

    getSecurityQuestion(){
        return this.securityQuestion;
    }
    setSecurityQuestion(securityQuestion: string){
        this.securityQuestion = securityQuestion;
    }
    getAnswer(){
        return this.answer;
    }
    setAnswer(answer: string){
        this.answer = answer;
    }
    getFullName(){
        return this.fullName;
    }
    getSubscriptionType(){
        return this.subscriptionType;
    }
    getEmail(){
        return this.email;
    }
    getMobileNumber(){
        return this.mobileNumber;
    }
    getPassword(){
        return this.password;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    getWeight(){
        return this.weight;
    }
    getGender(){
        return this.gender;
    }
    getHeight(){
        return this.height;
    }

    setFullName(fullName: string){
        this.fullName = fullName;
    }
    setSubscriptionType(subscriptionType: string){
        this.subscriptionType = subscriptionType;
    }
    setEmail(email: string){
        this.email = email;
    }
    setPassword(password: string){
        this.password = password;
    }
    setGender(gender: string){
        this.gender = gender;
    }
    setDateOfBirth(dateOfBirth: string){
        this.dateOfBirth = dateOfBirth;
    }
    setMobileNumber(mobileNumber: string){
        this.mobileNumber = mobileNumber;
    }
    setWeight(weight: number){
        this.weight = weight;
    }
    setHeight(height: number){
        this.height = height;
    }

}