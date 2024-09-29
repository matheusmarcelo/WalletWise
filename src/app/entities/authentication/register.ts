export class Register {
    public name: string;
    public password: string;
    public email: string;
    public documentNumber: string;
    public birthDate: Date;

    constructor() {
        this.name = "";
        this.password = "";
        this.email = "";
        this.documentNumber = "";
        this.birthDate = new Date();
    }
}