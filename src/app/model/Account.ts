import { Group } from "./Group";

export class Account{
    id : any
    username : any;
    password : any;
    emailAddress : any;
    groups : Group[];

    constructor(username : string, password : string, emailAddress:string){
        this.username = username;
        this.password = password;
        this.emailAddress = emailAddress;
    }
}