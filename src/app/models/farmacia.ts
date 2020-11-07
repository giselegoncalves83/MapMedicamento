export class farmacia{
    private codigo :number;
    private nome :string;
    private status :string;
    private codBairro :number;

    constructor(pCodigo :number, pNome :string, pStatus :string, pCodBairro :number){
        this.codigo = pCodigo;
        this.nome = pNome;
        this.status = pStatus;
        this.codBairro = pCodBairro;
    }

}