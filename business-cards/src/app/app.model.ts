export class Card{

    firstName:string;
    lastName:string;
    phoneNumber:string;
    Email:string;
    extraText:string;
    imageUri:string;
 
    constructor(firstName:string, lastName:string, phoneNumber:string, Email:string, extraText?:string, imageUri?:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.Email = Email;
        this.extraText = extraText;
        this.imageUri = imageUri;
    }


}