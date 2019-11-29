export class Profile {

	fullName: string;
	email: string;
	mobileNumber: string;
	height: any;
	weight: any;

	getFullName(){
		return this.fullName;
	} 
	setFullName(fullName: string){
		this.fullName = fullName;
	}
	getEmail() {
		return this.email;
	}
	setEmail(email: string) {
		this.email = email;
	}

	getMobileNumber() {
		return this.mobileNumber;
	}
	setMobileNumber(mobileNumber: string) {
		this.mobileNumber = mobileNumber;
	}

	getHeight() {
		return this.height;
	}
	setHeight(height: number) {
		this.height = height;
	}

	getWeight() {
		return this.weight;
	}
	setWeight(weight: number) {
		this.weight = weight;
	}
}