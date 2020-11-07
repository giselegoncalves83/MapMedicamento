export class receitamedica{
    private codigo :number;
    private motivoReceita :string;
    private dataReceita :Date;
    private codEspecialidade :number;
    private codMedicamento :number;

    constructor(pCodigo :number, pMotivoReceita :string, pDataReceita :Date, pCodEspecialidade :number, 
                pCodMedicamento :number){
        pCodigo     = this.codigo;
        pMotivoReceita = this.motivoReceita;
        pDataReceita     = this.dataReceita;
        pCodEspecialidade  = this.codEspecialidade;
        pCodMedicamento = this.codMedicamento;
    }

}