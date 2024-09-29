export class User {
    id: number;
    code: string;
    name: string;
    email: string;
    access_token: string;

    constructor(id: number = 0, code: string = '', name: string = '', email: string = '', acess_token: string = '') {
        this.id = id;
        this.code = code;
        this.name = name;
        this.email = email;
        this.access_token = acess_token;
    }
}