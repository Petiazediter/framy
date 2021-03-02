export class Account{
    id : any
    username : any;
    password : any;
    emailAddress : any;

    constructor(username : string, password : string, emailAddress:string){
        this.username = username;
        this.password = password;
        this.emailAddress = emailAddress;
    }
}