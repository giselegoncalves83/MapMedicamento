export class farmacia{
    private nome :string;
    private status :string;
    private codBairro :number;

    constructor(pNome :string, pStatus :string, pCodBairro :number){
        this.nome = pNome;
        this.status = pStatus;
        this.codBairro = pCodBairro;
    }

}