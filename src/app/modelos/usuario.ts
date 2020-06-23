export class usuario {
    public Id: number;
    public nome: string;
    public senha:string;
    public email:string;
    
    constructor(Id:number, nome: string, senha:string, email:string) {
        this.Id = Id;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}