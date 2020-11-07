export class receitamedica{
    private codigo :number;
    private motivoReceita :string;
    private dataReceita :Date;
    private codEspecialidade :number;
    private codMedicamento :number;

    constructor(pCodigo :number, pMotivoReceita :string, pDataReceita :Date, pCodEspecialidade :number, 
                pCodMedicamento :number){
        this.codigo = pCodigo;
        this.motivoReceita = pMotivoReceita;
        this.dataReceita = pDataReceita;
        this.codEspecialidade = pCodEspecialidade;
        this.codMedicamento = pCodMedicamento;
    }

}